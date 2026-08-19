const STORAGE_KEY = 'raddesk-state-v1';

const defaultState = {
  currentTool: 'dashboard',
  exposure: { kvp: 80, ma: 200, time: 0.10, sid: 40, oid: 2 },
  causeEffect: { variable: 'kvp', direction: 'increase' },
  scratchpad: '',
  formulaType: 'inverseSquare',
  formulaValues: {},
  favorites: [],
  recentItems: []
};

let state = loadState();
let autosaveTimer;

const toolMeta = {
  dashboard: ['Dashboard', 'Quick access to your radiography study tools.'],
  exposure: ['Exposure Playground', 'Change the case values and see the relationships update live.'],
  'cause-effect': ['Cause → Effect', 'Study what happens when a radiographic variable changes.'],
  formula: ['Formula Solver', 'Enter your case values and solve common radiography equations.'],
  positioning: ['Positioning Reference', 'Search core projections, centering, evaluation criteria, and positioning pitfalls.'],
  troubleshooter: ['Radiograph Troubleshooter', 'Work backward from an image-quality problem to likely causes and corrections.'],
  terminology: ['Terminology', 'Simple explanations for common radiography vocabulary.'],
  abbreviations: ['Abbreviations', 'Expanded radiography, clinical, imaging, and safety abbreviation library.'],
  articles: ['Learning Library', 'Search 100 curated radiography and medical-imaging learning resources.'],
  scratchpad: ['Scratchpad', 'Keep notes and calculations saved beside your study tools.']
};


function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState, ...saved, exposure: { ...defaultState.exposure, ...(saved?.exposure || {}) }, causeEffect: { ...defaultState.causeEffect, ...(saved?.causeEffect || {}) }, favorites: saved?.favorites || [], recentItems: saved?.recentItems || [] };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState(explicit = false) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const status = document.getElementById('saveStatus');
  status.textContent = explicit ? 'Saved checkpoint' : 'Saved';
  status.style.color = '#9fc5b1';
  if (explicit) setTimeout(() => status.textContent = 'Saved', 1200);
}

function scheduleAutosave() {
  const status = document.getElementById('saveStatus');
  status.textContent = 'Saving…';
  status.style.color = '#d9c28d';
  clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(() => saveState(false), 300);
}

function openTool(tool) {
  state.currentTool = tool;
  document.querySelectorAll('.tool-panel').forEach(p => p.classList.toggle('active', p.id === tool));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.tool === tool));
  const [title, subtitle] = toolMeta[tool];
  document.getElementById('pageTitle').textContent = title;
  document.getElementById('pageSubtitle').textContent = subtitle;
  scheduleAutosave();
}

document.querySelectorAll('[data-tool]').forEach(btn => btn.addEventListener('click', () => openTool(btn.dataset.tool)));
document.querySelectorAll('[data-open]').forEach(btn => btn.addEventListener('click', () => openTool(btn.dataset.open)));

document.getElementById('saveAllBtn').addEventListener('click', () => saveState(true));
document.getElementById('saveTopBtn').addEventListener('click', () => saveState(true));
document.getElementById('resetBtn').addEventListener('click', resetCurrentTool);

function bindExposureControl(key, decimals = 0) {
  const range = document.getElementById(key);
  const number = document.getElementById(`${key}Number`);
  const display = document.getElementById(`${key}Value`);

  const apply = raw => {
    let value = Number(raw);
    const min = Number(range.min), max = Number(range.max);
    value = Math.min(max, Math.max(min, value));
    range.value = value;
    number.value = value;
    display.textContent = value.toFixed(decimals);
    state.exposure[key] = value;
    updateExposureResults();
    scheduleAutosave();
  };

  range.addEventListener('input', e => apply(e.target.value));
  number.addEventListener('input', e => apply(e.target.value));
  apply(state.exposure[key]);
}

bindExposureControl('kvp');
bindExposureControl('ma');
bindExposureControl('time', 2);
bindExposureControl('sid');
bindExposureControl('oid', 1);

function updateExposureResults() {
  const { kvp, ma, time, sid, oid } = state.exposure;
  const mas = ma * time;
  const referenceIntensity = (mas * Math.pow(kvp / 80, 2)) / Math.pow(sid / 40, 2);
  const sod = Math.max(0.1, sid - oid);
  const magnification = sid / sod;

  document.getElementById('masResult').textContent = mas.toFixed(2);
  document.getElementById('intensityResult').textContent = `${referenceIntensity.toFixed(2)}×`;
  document.getElementById('magnificationResult').textContent = `${magnification.toFixed(2)}×`;
  document.getElementById('sodResult').textContent = `${sod.toFixed(1)} in`;

  const summary = [
    ['kVp', kvp > 80 ? 'Higher than baseline → beam energy/penetration generally ↑' : kvp < 80 ? 'Lower than baseline → beam energy/penetration generally ↓' : 'Baseline setting'],
    ['mAs', `${mas.toFixed(2)} mAs → photon quantity changes approximately with mAs`],
    ['SID', sid > 40 ? 'Greater distance → receptor intensity ↓ if other factors stay unchanged' : sid < 40 ? 'Shorter distance → receptor intensity ↑' : '40 in baseline'],
    ['OID', oid > 0 ? 'Greater OID → magnification ↑ and recorded detail generally ↓' : 'Minimal OID → less magnification']
  ];
  document.getElementById('relationshipSummary').innerHTML = summary.map(([a,b]) => `<div class="relationship-item"><span>${a}</span><b>${b}</b></div>`).join('');
}

const ceVariable = document.getElementById('ceVariable');
const ceDirection = document.getElementById('ceDirection');
ceVariable.value = state.causeEffect.variable;
ceDirection.value = state.causeEffect.direction;
[ceVariable, ceDirection].forEach(el => el.addEventListener('change', () => {
  state.causeEffect.variable = ceVariable.value;
  state.causeEffect.direction = ceDirection.value;
  renderCauseEffect();
  scheduleAutosave();
}));

function renderCauseEffect() {
  const v = ceVariable.value, d = ceDirection.value;
  const increase = d === 'increase';
  const map = {
    kvp: [
      ['Beam energy / penetration', increase ? '↑' : '↓'],
      ['Receptor exposure', increase ? 'generally ↑' : 'generally ↓'],
      ['Subject contrast', increase ? 'generally ↓' : 'generally ↑'],
      ['Scatter production', increase ? 'generally ↑' : 'generally ↓']
    ],
    mas: [
      ['Photon quantity', increase ? '↑' : '↓'],
      ['Receptor exposure', increase ? '↑' : '↓'],
      ['Patient dose', increase ? '↑' : '↓'],
      ['Image noise', increase ? 'generally ↓' : 'generally ↑']
    ],
    sid: [
      ['Beam intensity at receptor', increase ? '↓' : '↑'],
      ['Magnification', increase ? '↓' : '↑'],
      ['Recorded detail', increase ? 'generally ↑' : 'generally ↓'],
      ['mAs required to maintain exposure', increase ? '↑' : '↓']
    ],
    oid: [
      ['Magnification', increase ? '↑' : '↓'],
      ['Recorded detail', increase ? '↓' : '↑'],
      ['Shape/size distortion risk', increase ? '↑' : '↓'],
      ['Object-to-receptor proximity', increase ? '↓' : '↑']
    ]
  };
  document.getElementById('causeEffectOutput').innerHTML = map[v].map(([label, val]) => `<div class="effect-item"><span>${label}</span><b class="${val.includes('↑') ? 'up' : val.includes('↓') ? 'down' : ''}">${val}</b></div>`).join('');
}
renderCauseEffect();

const formulaType = document.getElementById('formulaType');
formulaType.value = state.formulaType;
formulaType.addEventListener('change', () => {
  state.formulaType = formulaType.value;
  renderFormulaInputs();
  scheduleAutosave();
});
document.getElementById('solveFormulaBtn').addEventListener('click', solveFormula);

function renderFormulaInputs() {
  const target = document.getElementById('formulaInputs');
  const type = formulaType.value;
  const templates = {
    inverseSquare: `
      <div class="form-grid">
        <label>Initial intensity<input id="i1" type="number" step="any" value="100"></label>
        <label>Initial distance<input id="d1" type="number" step="any" value="40"></label>
        <label>Final distance<input id="d2" type="number" step="any" value="72"></label>
      </div>`,
    mas: `<div class="form-grid"><label>mA<input id="fma" type="number" step="any" value="200"></label><label>Time (s)<input id="ftime" type="number" step="any" value="0.1"></label></div>`,
    magnification: `<div class="form-grid"><label>SID<input id="fsid" type="number" step="any" value="40"></label><label>SOD<input id="fsod" type="number" step="any" value="38"></label></div>`,
    fifteen: `<div class="form-grid"><label>Original kVp<input id="fkvp" type="number" step="any" value="80"></label><label>Original mAs<input id="fmas" type="number" step="any" value="20"></label></div><label>Direction<select id="fdir"><option value="increase">Increase kVp 15%</option><option value="decrease">Decrease kVp 15%</option></select></label>`
  };
  target.innerHTML = templates[type];
}
renderFormulaInputs();

function solveFormula() {
  const type = formulaType.value;
  let output = '';
  if (type === 'inverseSquare') {
    const i1 = +document.getElementById('i1').value, d1 = +document.getElementById('d1').value, d2 = +document.getElementById('d2').value;
    const i2 = i1 * (d1 ** 2) / (d2 ** 2);
    output = `Final intensity = ${i2.toFixed(2)}\n\nI₁D₁² = I₂D₂²\nI₂ = I₁ × D₁² ÷ D₂²\nI₂ = ${i1} × ${d1}² ÷ ${d2}²`;
  } else if (type === 'mas') {
    const ma = +document.getElementById('fma').value, time = +document.getElementById('ftime').value;
    output = `mAs = ${(ma*time).toFixed(2)}\n\nmAs = mA × time\n${ma} × ${time} = ${(ma*time).toFixed(2)}`;
  } else if (type === 'magnification') {
    const sid = +document.getElementById('fsid').value, sod = +document.getElementById('fsod').value;
    output = `Magnification factor = ${(sid/sod).toFixed(3)}×\n\nMF = SID ÷ SOD\n${sid} ÷ ${sod} = ${(sid/sod).toFixed(3)}`;
  } else {
    const kvp = +document.getElementById('fkvp').value, mas = +document.getElementById('fmas').value, dir = document.getElementById('fdir').value;
    const factor = dir === 'increase' ? 1.15 : 0.85;
    const newKvp = kvp * factor;
    const newMas = dir === 'increase' ? mas/2 : mas*2;
    output = `New kVp ≈ ${newKvp.toFixed(1)}\nNew mAs ≈ ${newMas.toFixed(2)}\n\n15% of ${kvp} = ${(kvp*0.15).toFixed(1)}\n${dir === 'increase' ? 'Increase' : 'Decrease'} kVp by that amount and ${dir === 'increase' ? 'halve' : 'double'} mAs to approximately maintain receptor exposure.`;
  }
  document.getElementById('formulaResult').textContent = output;
  scheduleAutosave();
}


function makeItemId(type, title) {
  return `${type}:${title}`.toLowerCase().replace(/\s+/g, '-');
}

function isFavorite(id) {
  return state.favorites.some(item => item.id === id);
}

function toggleFavorite(item) {
  const idx = state.favorites.findIndex(x => x.id === item.id);
  if (idx >= 0) state.favorites.splice(idx, 1);
  else state.favorites.unshift(item);
  state.favorites = state.favorites.slice(0, 30);
  scheduleAutosave();
  renderAllReferenceViews();
  renderDashboardLists();
}

function addRecent(item) {
  state.recentItems = [item, ...state.recentItems.filter(x => x.id !== item.id)].slice(0, 12);
  scheduleAutosave();
  renderDashboardLists();
}

function starButton(item) {
  const fav = isFavorite(item.id);
  return `<button class="star-btn ${fav ? 'active' : ''}" data-favorite='${encodeURIComponent(JSON.stringify(item))}' aria-label="${fav ? 'Remove from' : 'Add to'} favorites">${fav ? '★' : '☆'}</button>`;
}

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-favorite]');
  if (!btn) return;
  e.stopPropagation();
  toggleFavorite(JSON.parse(decodeURIComponent(btn.dataset.favorite)));
});

function renderReferences(items, targetId, query = '', type = 'reference') {
  const q = query.trim().toLowerCase();
  const filtered = items.filter(item => `${item.title} ${item.body} ${item.category || ''}`.toLowerCase().includes(q));
  document.getElementById(targetId).innerHTML = filtered.length ? filtered.map(item => {
    const fav = { id: makeItemId(type,item.title), type, title:item.title, subtitle:item.category || item.body.split('\n')[0], tool: type === 'term' ? 'terminology' : type === 'abbr' ? 'abbreviations' : null };
    return `<article class="reference-item reference-clickable" data-recent='${encodeURIComponent(JSON.stringify(fav))}'>
      <div class="reference-topline">
        <h4>${item.title}</h4>
        <div class="reference-actions">${item.category ? `<span class="reference-category">${item.category}</span>` : ''}${starButton(fav)}</div>
      </div>
      ${item.body.split('\n').map(line => `<p>${line}</p>`).join('')}
    </article>`;
  }).join('') : '<div class="empty-state">No matching reference found.</div>';
}

function renderPositions(query = '', category = 'All') {
  const q = query.trim().toLowerCase();
  const filtered = positioningData.filter(p => {
    const searchable = `${p.title} ${p.category} ${p.sid} ${p.cr} ${p.patient} ${p.breathing} ${p.demonstrates} ${p.evaluation} ${p.pitfalls}`.toLowerCase();
    return searchable.includes(q) && (category === 'All' || p.category === category);
  });
  document.getElementById('positionCount').textContent = `${filtered.length} of ${positioningData.length} projections`;
  document.getElementById('positionList').innerHTML = filtered.length ? filtered.map(p => {
    const fav = { id:makeItemId('position',p.title), type:'position', title:p.title, subtitle:p.category, tool:'positioning' };
    return `<article class="position-card" data-recent='${encodeURIComponent(JSON.stringify(fav))}'>
      <div class="position-card-head"><div><span class="reference-category">${p.category}</span><h4>${p.title}</h4></div>${starButton(fav)}</div>
      <div class="position-facts">
        <div><span>SID</span><strong>${p.sid}</strong></div>
        <div><span>Central ray</span><strong>${p.cr}</strong></div>
        <div><span>Patient / part</span><strong>${p.patient}</strong></div>
        <div><span>Breathing</span><strong>${p.breathing}</strong></div>
      </div>
      <details class="position-details">
        <summary>Evaluation & study notes</summary>
        <div class="detail-block"><span>Demonstrates</span><p>${p.demonstrates}</p></div>
        <div class="detail-block"><span>Evaluation criteria</span><p>${p.evaluation}</p></div>
        <div class="detail-block warning"><span>Common pitfalls</span><p>${p.pitfalls}</p></div>
      </details>
    </article>`;
  }).join('') : '<div class="empty-state">No positioning entries match that search.</div>';
}

function renderTroubleshooter(query = '', category = 'All') {
  const q = query.trim().toLowerCase();
  const filtered = troubleshooterData.filter(t => {
    const searchable = `${t.issue} ${t.category} ${t.likely.join(' ')} ${t.check.join(' ')} ${t.correction.join(' ')} ${t.note}`.toLowerCase();
    return searchable.includes(q) && (category === 'All' || t.category === category);
  });
  document.getElementById('troubleList').innerHTML = filtered.length ? filtered.map(t => {
    const fav = { id:makeItemId('trouble',t.issue), type:'trouble', title:t.issue, subtitle:t.category, tool:'troubleshooter' };
    return `<article class="trouble-card" data-recent='${encodeURIComponent(JSON.stringify(fav))}'>
      <div class="trouble-head"><div><span class="reference-category">${t.category}</span><h4>${t.issue}</h4></div>${starButton(fav)}</div>
      <div class="trouble-columns">
        <div><h5>Likely causes</h5><ul>${t.likely.map(x=>`<li>${x}</li>`).join('')}</ul></div>
        <div><h5>Check</h5><ul>${t.check.map(x=>`<li>${x}</li>`).join('')}</ul></div>
        <div><h5>Typical correction</h5><ul>${t.correction.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      </div>
      <div class="trouble-note">${t.note}</div>
    </article>`;
  }).join('') : '<div class="empty-state">No troubleshooting entries match that search.</div>';
}

function renderArticles(query = '', category = 'All') {
  const q = query.trim().toLowerCase();
  const filtered = articles.filter(item => {
    const searchable = `${item.title} ${item.source} ${item.category} ${item.summary} ${item.tags}`.toLowerCase();
    return searchable.includes(q) && (category === 'All' || item.category === category);
  });
  document.getElementById('articleCount').textContent = `${filtered.length} of ${articles.length} resources`;
  document.getElementById('articleList').innerHTML = filtered.length ? filtered.map((item, index) => {
    const fav = { id:makeItemId('article',item.title), type:'article', title:item.title, subtitle:item.source, tool:'articles', url:item.url };
    return `<article class="article-card" data-recent='${encodeURIComponent(JSON.stringify(fav))}'>
      <div class="article-card-top">
        <span class="article-index">${String(index + 1).padStart(2,'0')}</span>
        <div class="reference-actions"><span class="reference-category">${item.category}</span>${starButton(fav)}</div>
      </div>
      <h4>${item.title}</h4>
      <p>${item.summary}</p>
      <div class="article-footer">
        <span class="article-source">${item.source}</span>
        <a class="article-link" href="${item.url}" target="_blank" rel="noopener noreferrer">Open resource ↗</a>
      </div>
    </article>`;
  }).join('') : '<div class="empty-state">No resources match that search. Try a broader term or choose All categories.</div>';
}

document.addEventListener('click', e => {
  const card = e.target.closest('[data-recent]');
  if (!card || e.target.closest('[data-favorite]')) return;
  try { addRecent(JSON.parse(decodeURIComponent(card.dataset.recent))); } catch {}
});

function populateCategories(selectId, items) {
  const select = document.getElementById(selectId);
  const categories = ['All', ...new Set(items.map(x => x.category))];
  select.innerHTML = categories.map(c => `<option value="${c}">${c}</option>`).join('');
}

function renderDashboardLists() {
  const favBox = document.getElementById('favoritesList');
  const recentBox = document.getElementById('recentList');
  const listMarkup = (items, empty) => items.length ? items.map(item => `
    <button class="mini-item" data-jump-item='${encodeURIComponent(JSON.stringify(item))}'>
      <span class="mini-type">${item.type}</span><span><strong>${item.title}</strong><small>${item.subtitle || ''}</small></span>
    </button>`).join('') : `<div class="empty-state compact">${empty}</div>`;
  favBox.innerHTML = listMarkup(state.favorites.slice(0,6), 'Star references to pin them here.');
  recentBox.innerHTML = listMarkup(state.recentItems.slice(0,6), 'Items you open will appear here.');
}

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-jump-item]');
  if (!btn) return;
  const item = JSON.parse(decodeURIComponent(btn.dataset.jumpItem));
  if (item.url) { window.open(item.url, '_blank', 'noopener'); return; }
  if (item.tool) openTool(item.tool);
});

function renderAllReferenceViews() {
  renderReferences(terms, 'termList', document.getElementById('termSearch')?.value || '', 'term');
  renderReferences(abbreviations, 'abbrList', document.getElementById('abbrSearch')?.value || '', 'abbr');
  renderPositions(document.getElementById('positionSearch')?.value || '', document.getElementById('positionCategory')?.value || 'All');
  renderTroubleshooter(document.getElementById('troubleSearch')?.value || '', document.getElementById('troubleCategory')?.value || 'All');
  renderArticles(document.getElementById('articleSearch')?.value || '', document.getElementById('articleCategory')?.value || 'All');
}

populateCategories('positionCategory', positioningData);
populateCategories('troubleCategory', troubleshooterData);
populateCategories('articleCategory', articles);
renderAllReferenceViews();
renderDashboardLists();

const positionSearch = document.getElementById('positionSearch');
const positionCategory = document.getElementById('positionCategory');
[positionSearch, positionCategory].forEach(el => el.addEventListener('input', () => renderPositions(positionSearch.value, positionCategory.value)));

document.getElementById('termSearch').addEventListener('input', e => renderReferences(terms, 'termList', e.target.value, 'term'));
document.getElementById('abbrSearch').addEventListener('input', e => renderReferences(abbreviations, 'abbrList', e.target.value, 'abbr'));

const articleSearch = document.getElementById('articleSearch');
const articleCategory = document.getElementById('articleCategory');
[articleSearch, articleCategory].forEach(el => el.addEventListener('input', () => renderArticles(articleSearch.value, articleCategory.value)));

const troubleSearch = document.getElementById('troubleSearch');
const troubleCategory = document.getElementById('troubleCategory');
[troubleSearch, troubleCategory].forEach(el => el.addEventListener('input', () => renderTroubleshooter(troubleSearch.value, troubleCategory.value)));

// ---------------- Universal Search ----------------
const searchOverlay = document.getElementById('globalSearchOverlay');
const globalSearchInput = document.getElementById('globalSearchInput');
const globalResults = document.getElementById('globalSearchResults');

function openGlobalSearch(prefill = '') {
  searchOverlay.classList.add('open');
  searchOverlay.setAttribute('aria-hidden','false');
  globalSearchInput.value = prefill;
  renderGlobalSearch(prefill);
  setTimeout(()=>globalSearchInput.focus(), 20);
}
function closeGlobalSearch() {
  searchOverlay.classList.remove('open');
  searchOverlay.setAttribute('aria-hidden','true');
}
document.getElementById('globalSearchBtn').addEventListener('click', ()=>openGlobalSearch());
document.getElementById('closeGlobalSearch').addEventListener('click', closeGlobalSearch);
searchOverlay.addEventListener('click', e => { if (e.target === searchOverlay) closeGlobalSearch(); });
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openGlobalSearch(); }
  if (e.key === 'Escape' && searchOverlay.classList.contains('open')) closeGlobalSearch();
});

const toolSearchItems = Object.entries(toolMeta).map(([tool,[title,subtitle]]) => ({kind:'Tool',title,subtitle,tool}));

function renderGlobalSearch(query='') {
  const q = query.trim().toLowerCase();
  if (!q) {
    globalResults.innerHTML = `<div class="search-empty"><strong>Search your entire RadDesk knowledge base.</strong><span>Results appear instantly as you type.</span></div>`;
    return;
  }
  let results = [];
  toolSearchItems.forEach(x => { if (`${x.title} ${x.subtitle}`.toLowerCase().includes(q)) results.push(x); });
  terms.forEach(x => { if (`${x.title} ${x.body} ${x.category}`.toLowerCase().includes(q)) results.push({kind:'Term',title:x.title,subtitle:x.body,tool:'terminology'}); });
  abbreviations.forEach(x => { if (`${x.title} ${x.body} ${x.category}`.toLowerCase().includes(q)) results.push({kind:'Abbreviation',title:x.title,subtitle:x.body,tool:'abbreviations'}); });
  positioningData.forEach(x => { if (`${x.title} ${x.category} ${x.cr} ${x.patient} ${x.evaluation} ${x.pitfalls}`.toLowerCase().includes(q)) results.push({kind:'Positioning',title:x.title,subtitle:`${x.category} · ${x.cr}`,tool:'positioning',prefill:x.title}); });
  troubleshooterData.forEach(x => { if (`${x.issue} ${x.category} ${x.likely.join(' ')} ${x.correction.join(' ')}`.toLowerCase().includes(q)) results.push({kind:'Troubleshooter',title:x.issue,subtitle:x.category,tool:'troubleshooter',prefill:x.issue}); });
  articles.forEach(x => { if (`${x.title} ${x.source} ${x.category} ${x.summary} ${x.tags}`.toLowerCase().includes(q)) results.push({kind:'Article',title:x.title,subtitle:`${x.source} · ${x.category}`,tool:'articles',url:x.url}); });
  results = results.slice(0, 36);
  globalResults.innerHTML = results.length ? results.map(r => `<button class="global-result" data-global-result='${encodeURIComponent(JSON.stringify(r))}'><span class="result-kind">${r.kind}</span><span><strong>${r.title}</strong><small>${r.subtitle}</small></span><span class="result-arrow">↗</span></button>`).join('') : '<div class="search-empty">No matches. Try another term.</div>';
}
globalSearchInput.addEventListener('input', e => renderGlobalSearch(e.target.value));
globalResults.addEventListener('click', e => {
  const btn = e.target.closest('[data-global-result]');
  if (!btn) return;
  const r = JSON.parse(decodeURIComponent(btn.dataset.globalResult));
  addRecent({id:makeItemId(r.kind,r.title),type:r.kind.toLowerCase(),title:r.title,subtitle:r.subtitle,tool:r.tool,url:r.url});
  closeGlobalSearch();
  if (r.url) { window.open(r.url,'_blank','noopener'); return; }
  openTool(r.tool);
  if (r.prefill && r.tool === 'positioning') { positionSearch.value = r.prefill; renderPositions(r.prefill, 'All'); }
  if (r.prefill && r.tool === 'troubleshooter') { troubleSearch.value = r.prefill; renderTroubleshooter(r.prefill, 'All'); }
});

const scratchpad = document.getElementById('scratchpadText');
scratchpad.value = state.scratchpad;
updateNoteCount();
scratchpad.addEventListener('input', () => {
  state.scratchpad = scratchpad.value;
  updateNoteCount();
  scheduleAutosave();
});
function updateNoteCount() { document.getElementById('noteCount').textContent = `${scratchpad.value.length} characters`; }

function resetCurrentTool() {
  const tool = state.currentTool;
  if (tool === 'exposure') {
    state.exposure = { ...defaultState.exposure };
    ['kvp','ma','time','sid','oid'].forEach(k => {
      document.getElementById(k).value = state.exposure[k];
      document.getElementById(`${k}Number`).value = state.exposure[k];
      const d = k === 'time' ? 2 : k === 'oid' ? 1 : 0;
      document.getElementById(`${k}Value`).textContent = Number(state.exposure[k]).toFixed(d);
    });
    updateExposureResults();
  } else if (tool === 'cause-effect') {
    state.causeEffect = { ...defaultState.causeEffect };
    ceVariable.value = state.causeEffect.variable;
    ceDirection.value = state.causeEffect.direction;
    renderCauseEffect();
  } else if (tool === 'scratchpad') {
    if (confirm('Clear the scratchpad?')) {
      state.scratchpad = '';
      scratchpad.value = '';
      updateNoteCount();
    }
  } else if (tool === 'positioning') {
    positionSearch.value = ''; positionCategory.value = 'All'; renderPositions();
  } else if (tool === 'troubleshooter') {
    troubleSearch.value = ''; troubleCategory.value = 'All'; renderTroubleshooter();
  } else if (tool === 'formula') {
    formulaType.value = 'inverseSquare';
    state.formulaType = 'inverseSquare';
    renderFormulaInputs();
    document.getElementById('formulaResult').textContent = 'Choose values and press Solve.';
  }
  saveState(true);
}

openTool(state.currentTool || 'dashboard');
updateExposureResults();
