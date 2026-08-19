// RadDesk V2 supplemental student tools data.
const positioningData = [
  {
    "title": "PA Chest",
    "category": "Chest",
    "sid": "72 in (183 cm) commonly used",
    "cr": "Perpendicular to IR at approximately T7, MSP centered",
    "patient": "Erect, anterior chest against IR, shoulders rolled forward and depressed, chin elevated",
    "breathing": "Expose on second full inspiration",
    "demonstrates": "Entire lungs from apices through costophrenic angles, heart and mediastinum",
    "evaluation": "No rotation; scapulae largely outside lung fields; adequate inspiration; lungs included",
    "pitfalls": "Rotation, clipped apices/costophrenic angles, scapulae over lungs, poor inspiration"
  },
  {
    "title": "AP Chest — Portable/Semi-Erect",
    "category": "Chest",
    "sid": "Use longest practical SID; 72 in when feasible",
    "cr": "Perpendicular to MSP around T7; adjust to include apices and costophrenic angles",
    "patient": "Supine, semi-erect, or erect depending on condition; avoid rotation",
    "breathing": "Full inspiration when patient can cooperate",
    "demonstrates": "Chest when PA positioning is not feasible",
    "evaluation": "Entire lungs included; minimal rotation; note AP projection/magnification",
    "pitfalls": "Heart magnification, lordotic appearance, rotation, clipped lung bases"
  },
  {
    "title": "Left Lateral Chest",
    "category": "Chest",
    "sid": "72 in commonly used",
    "cr": "Perpendicular to IR at approximately T7",
    "patient": "Left side against IR when possible, arms elevated, MCP perpendicular to IR",
    "breathing": "Full inspiration",
    "demonstrates": "Lungs, retrosternal and retrocardiac spaces, posterior costophrenic angles",
    "evaluation": "Posterior ribs nearly superimposed; arms clear of chest; lung apices and bases included",
    "pitfalls": "Arm or soft-tissue overlap, rotation, clipped posterior ribs"
  },
  {
    "title": "AP Lordotic Chest",
    "category": "Chest",
    "sid": "72 in commonly used",
    "cr": "Perpendicular to IR and centered to mid-sternum; alternate tube-angle methods may be taught",
    "patient": "Patient leans backward with shoulders against IR, feet forward",
    "breathing": "Full inspiration",
    "demonstrates": "Lung apices with clavicles projected superiorly",
    "evaluation": "Clavicles projected above apices; minimal rotation",
    "pitfalls": "Insufficient lordosis, rotation, clipped apices"
  },
  {
    "title": "Lateral Decubitus Chest",
    "category": "Chest",
    "sid": "72 in commonly used",
    "cr": "Horizontal beam to approximately T7",
    "patient": "Affected side down for small pleural fluid; affected side up for small pneumothorax, per clinical objective",
    "breathing": "Full inspiration",
    "demonstrates": "Air-fluid levels and small pleural air/fluid collections",
    "evaluation": "Horizontal beam evident; entire lungs included; no rotation",
    "pitfalls": "Wrong side down for clinical question, insufficient delay, clipped dependent chest"
  },
  {
    "title": "AP Supine Abdomen (KUB)",
    "category": "Abdomen",
    "sid": "40–44 in commonly used",
    "cr": "Perpendicular at level of iliac crests, MSP",
    "patient": "Supine, MSP centered, arms away from abdomen, no rotation",
    "breathing": "Suspend at end expiration",
    "demonstrates": "Abdominal anatomy including kidneys through bladder when adequately centered",
    "evaluation": "Pubic symphysis included; lateral soft-tissue margins included; no rotation",
    "pitfalls": "Clipped symphysis or upper abdomen, rotation, motion"
  },
  {
    "title": "AP Upright Abdomen",
    "category": "Abdomen",
    "sid": "40–44 in commonly used",
    "cr": "Horizontal beam, centered about 2 in (5 cm) above iliac crests to include diaphragm",
    "patient": "Erect, back against IR, MSP centered",
    "breathing": "Suspend at end expiration",
    "demonstrates": "Air-fluid levels and free intraperitoneal air when present",
    "evaluation": "Diaphragm included; no rotation; lateral abdominal walls included",
    "pitfalls": "Diaphragm clipped, insufficient upright time, rotation"
  },
  {
    "title": "Left Lateral Decubitus Abdomen",
    "category": "Abdomen",
    "sid": "40–44 in commonly used",
    "cr": "Horizontal beam about 2 in above iliac crests to include diaphragm",
    "patient": "Left side down, knees slightly flexed, back against IR",
    "breathing": "Suspend at end expiration",
    "demonstrates": "Free intraperitoneal air against right lateral liver margin and air-fluid levels",
    "evaluation": "Diaphragm and abdomen included; horizontal beam; no rotation",
    "pitfalls": "Wrong side down, diaphragm clipped, inadequate decubitus time"
  },
  {
    "title": "AP Hand",
    "category": "Upper Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to 3rd MCP joint",
    "patient": "Hand pronated, palm flat, fingers extended and slightly separated",
    "breathing": "None",
    "demonstrates": "Phalanges, metacarpals, carpals and associated joints",
    "evaluation": "Open IP/MCP joints where anatomy allows; no rotation",
    "pitfalls": "Finger flexion, rotation, clipped fingertips/carpals"
  },
  {
    "title": "PA Hand",
    "category": "Upper Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to 3rd MCP joint",
    "patient": "Palm down on IR with fingers extended and separated",
    "breathing": "None",
    "demonstrates": "Hand bones and joints with minimal OID",
    "evaluation": "Metacarpals and phalanges included; minimal rotation",
    "pitfalls": "Bent digits, thumb overlap, anatomy clipped"
  },
  {
    "title": "PA Oblique Hand",
    "category": "Upper Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to 3rd MCP joint",
    "patient": "Rotate hand laterally about 45°, support fingertips if needed",
    "breathing": "None",
    "demonstrates": "Metacarpals/phalanges with reduced superimposition",
    "evaluation": "Partial overlap of metacarpal heads; appropriate obliquity",
    "pitfalls": "Too much/too little rotation, finger overlap"
  },
  {
    "title": "Lateral Hand",
    "category": "Upper Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to 2nd MCP joint",
    "patient": "Ulnar aspect on IR; fingers may be extended/fanned depending on purpose",
    "breathing": "None",
    "demonstrates": "Lateral hand and metacarpal alignment",
    "evaluation": "Metacarpals substantially superimposed for true lateral",
    "pitfalls": "Rotation, digits obscuring region of interest"
  },
  {
    "title": "PA Wrist",
    "category": "Upper Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to midcarpal area",
    "patient": "Hand pronated, wrist flat; shoulder-elbow-wrist in same plane",
    "breathing": "None",
    "demonstrates": "Distal radius/ulna, carpals, proximal metacarpals",
    "evaluation": "Carpal region centered; no rotation",
    "pitfalls": "Wrist not flat, rotation, distal forearm clipped"
  },
  {
    "title": "PA Oblique Wrist",
    "category": "Upper Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to midcarpal area",
    "patient": "Rotate wrist laterally about 45°",
    "breathing": "None",
    "demonstrates": "Carpals and distal forearm in oblique projection",
    "evaluation": "Appropriate partial superimposition of carpals",
    "pitfalls": "Incorrect obliquity, wrist flexion"
  },
  {
    "title": "Lateral Wrist",
    "category": "Upper Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to midcarpal area",
    "patient": "Ulnar side on IR, elbow flexed about 90°, thumb up",
    "breathing": "None",
    "demonstrates": "Lateral wrist and distal forearm",
    "evaluation": "Distal radius/ulna nearly superimposed",
    "pitfalls": "Forearm/wrist rotation"
  },
  {
    "title": "AP Forearm",
    "category": "Upper Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to midpoint of forearm",
    "patient": "Arm fully extended, hand supinated; include wrist and elbow",
    "breathing": "None",
    "demonstrates": "Radius and ulna with both adjacent joints",
    "evaluation": "Entire forearm, wrist and elbow included; minimal rotation",
    "pitfalls": "One joint clipped, forearm not fully supinated"
  },
  {
    "title": "Lateral Forearm",
    "category": "Upper Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to midpoint of forearm",
    "patient": "Elbow flexed 90°, thumb up; include wrist and elbow",
    "breathing": "None",
    "demonstrates": "Lateral radius/ulna and adjacent joints",
    "evaluation": "Humeral epicondyles superimposed; wrist and elbow included",
    "pitfalls": "Rotation, missing adjacent joint"
  },
  {
    "title": "AP Elbow",
    "category": "Upper Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to elbow joint",
    "patient": "Arm fully extended and supinated when possible",
    "breathing": "None",
    "demonstrates": "Distal humerus, elbow joint, proximal radius/ulna",
    "evaluation": "Epicondyles parallel to IR; elbow joint centered",
    "pitfalls": "Arm flexion, rotation, joint clipped"
  },
  {
    "title": "Lateral Elbow",
    "category": "Upper Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to elbow joint",
    "patient": "Elbow flexed about 90°, thumb up, humerus/forearm same plane",
    "breathing": "None",
    "demonstrates": "Elbow in lateral projection",
    "evaluation": "Epicondyles superimposed; olecranon in profile",
    "pitfalls": "Shoulder elevated, inadequate flexion, rotation"
  },
  {
    "title": "AP Humerus",
    "category": "Upper Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to midpoint of humerus",
    "patient": "Arm extended, hand supinated; include shoulder and elbow if possible",
    "breathing": "None",
    "demonstrates": "Entire humerus and adjacent joints",
    "evaluation": "Both shoulder and elbow included",
    "pitfalls": "One joint clipped, arm rotation"
  },
  {
    "title": "Lateral Humerus",
    "category": "Upper Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to midpoint of humerus",
    "patient": "Rotate arm internally when tolerated; trauma adaptations may use horizontal beam",
    "breathing": "None",
    "demonstrates": "Humerus in lateral projection",
    "evaluation": "Humerus included with adjacent joints when feasible",
    "pitfalls": "Forcing movement in trauma, clipped joint"
  },
  {
    "title": "AP Shoulder — External Rotation",
    "category": "Shoulder Girdle",
    "sid": "40 in commonly used",
    "cr": "Perpendicular about 1 in inferior to coracoid process",
    "patient": "Posterior shoulder against IR; arm externally rotated with epicondyles parallel to IR",
    "breathing": "Suspend respiration",
    "demonstrates": "Proximal humerus with greater tubercle in profile laterally",
    "evaluation": "Scapulohumeral region centered; greater tubercle profile",
    "pitfalls": "Inadequate external rotation, clipped soft tissue"
  },
  {
    "title": "AP Shoulder — Internal Rotation",
    "category": "Shoulder Girdle",
    "sid": "40 in commonly used",
    "cr": "Perpendicular about 1 in inferior to coracoid process",
    "patient": "Arm internally rotated; back of hand on hip when tolerated",
    "breathing": "Suspend respiration",
    "demonstrates": "Proximal humerus with lesser tubercle more medially/profiled",
    "evaluation": "Humeral head/neck and glenoid region included",
    "pitfalls": "Incorrect rotation, pain-limited positioning"
  },
  {
    "title": "Scapular Y Shoulder",
    "category": "Shoulder Girdle",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to scapulohumeral joint",
    "patient": "Anterior oblique, typically 45–60° until scapular body is perpendicular to IR",
    "breathing": "Suspend respiration",
    "demonstrates": "Scapula in lateral projection; useful for shoulder alignment",
    "evaluation": "Acromion and coracoid form the arms of the Y; humeral head near glenoid in normal alignment",
    "pitfalls": "Under/over rotation"
  },
  {
    "title": "Inferosuperior Axial Shoulder",
    "category": "Shoulder Girdle",
    "sid": "40 in commonly used",
    "cr": "Angled medially through axilla toward AC joint according to patient habitus/protocol",
    "patient": "Supine, arm abducted when safely possible",
    "breathing": "Suspend respiration",
    "demonstrates": "Relationship of humeral head and glenoid",
    "evaluation": "Glenohumeral relationship visible with minimal superimposition",
    "pitfalls": "Attempting unsafe abduction after trauma, clipping joint"
  },
  {
    "title": "AP Clavicle",
    "category": "Shoulder Girdle",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to mid-clavicle",
    "patient": "Erect or supine; arms at sides; no rotation",
    "breathing": "Suspend respiration",
    "demonstrates": "Entire clavicle including AC and SC ends",
    "evaluation": "Entire clavicle included",
    "pitfalls": "Ends clipped, rotation"
  },
  {
    "title": "AP Axial Clavicle",
    "category": "Shoulder Girdle",
    "sid": "40 in commonly used",
    "cr": "Cephalic angle typically used; degree varies with patient position/habitus and protocol",
    "patient": "Erect or supine, posterior shoulder against IR",
    "breathing": "Suspend respiration",
    "demonstrates": "Clavicle projected above ribs/scapula",
    "evaluation": "Clavicle elevated from thoracic structures",
    "pitfalls": "Incorrect tube angle, clipped clavicle"
  },
  {
    "title": "AP Scapula",
    "category": "Shoulder Girdle",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to mid-scapula",
    "patient": "Arm abducted about 90° when tolerated to move scapula laterally",
    "breathing": "Slow breathing technique may be used by program/protocol",
    "demonstrates": "Scapular body, borders and processes",
    "evaluation": "Entire scapula included",
    "pitfalls": "Insufficient abduction, clipped inferior angle"
  },
  {
    "title": "Lateral Scapula",
    "category": "Shoulder Girdle",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to medial border/mid-scapula",
    "patient": "Anterior oblique until scapular body is perpendicular to IR",
    "breathing": "Suspend respiration",
    "demonstrates": "Scapular body in lateral profile",
    "evaluation": "Medial and lateral borders substantially superimposed",
    "pitfalls": "Under/over rotation"
  },
  {
    "title": "AP Pelvis",
    "category": "Pelvis/Hip",
    "sid": "40–44 in commonly used",
    "cr": "Perpendicular, midway between ASIS and pubic symphysis",
    "patient": "Supine; legs internally rotated 15–20° unless trauma/contraindicated",
    "breathing": "Suspend respiration",
    "demonstrates": "Pelvic ring and proximal femora",
    "evaluation": "Pelvis not rotated; femoral necks not foreshortened when internal rotation appropriate",
    "pitfalls": "Rotation, feet not internally rotated, forcing rotation in trauma"
  },
  {
    "title": "AP Hip",
    "category": "Pelvis/Hip",
    "sid": "40–44 in commonly used",
    "cr": "Perpendicular to femoral neck region according to local landmarking method",
    "patient": "Supine; leg internally rotated 15–20° unless trauma/contraindicated",
    "breathing": "Suspend respiration",
    "demonstrates": "Hip joint and proximal femur",
    "evaluation": "Femoral neck in profile, greater trochanter mostly lateral",
    "pitfalls": "Insufficient internal rotation, clipping proximal femur"
  },
  {
    "title": "Frog-Leg Lateral Hip",
    "category": "Pelvis/Hip",
    "sid": "40–44 in commonly used",
    "cr": "Perpendicular to femoral neck/hip joint",
    "patient": "Supine, hip and knee flexed, thigh abducted as protocol permits",
    "breathing": "Suspend respiration",
    "demonstrates": "Proximal femur and hip in lateral projection",
    "evaluation": "Femoral neck/proximal femur demonstrated without excessive rotation",
    "pitfalls": "Do not use when fracture/dislocation is suspected unless specifically cleared"
  },
  {
    "title": "Cross-Table Lateral Hip",
    "category": "Pelvis/Hip",
    "sid": "40–44 in commonly used",
    "cr": "Horizontal beam directed to femoral neck; IR vertical at lateral hip",
    "patient": "Supine; unaffected leg elevated when possible; injured leg remains neutral",
    "breathing": "Suspend respiration",
    "demonstrates": "Trauma lateral of proximal femur/hip without moving affected limb",
    "evaluation": "Femoral neck and head visible with adequate penetration",
    "pitfalls": "IR/beam misalignment, grid cutoff, opposite thigh superimposition"
  },
  {
    "title": "AP Femur",
    "category": "Lower Extremity",
    "sid": "40–48 in depending on anatomy/IR",
    "cr": "Perpendicular to mid-femur",
    "patient": "Supine; rotate leg as needed for AP unless trauma",
    "breathing": "None",
    "demonstrates": "Entire femur; two images may be required to include hip and knee",
    "evaluation": "Both adjacent joints documented across images",
    "pitfalls": "Missing hip/knee, rotation"
  },
  {
    "title": "Lateral Femur",
    "category": "Lower Extremity",
    "sid": "40–48 in depending on anatomy/IR",
    "cr": "Perpendicular to mid-femur",
    "patient": "Lateral recumbent when feasible; trauma may require horizontal beam",
    "breathing": "None",
    "demonstrates": "Femur in lateral projection",
    "evaluation": "Adjacent joints included across images; condyles near superimposed distally",
    "pitfalls": "Unsafe movement in trauma, joint clipping"
  },
  {
    "title": "AP Knee",
    "category": "Lower Extremity",
    "sid": "40 in commonly used",
    "cr": "Centered to knee joint; slight angle may be used depending on habitus/protocol",
    "patient": "Supine or erect, leg extended, no rotation",
    "breathing": "None",
    "demonstrates": "Distal femur, proximal tibia/fibula and knee joint",
    "evaluation": "Femoral condyles symmetric; joint centered",
    "pitfalls": "Rotation, joint space poorly demonstrated"
  },
  {
    "title": "Lateral Knee",
    "category": "Lower Extremity",
    "sid": "40 in commonly used",
    "cr": "Centered to knee joint; small cephalic angle often used depending on protocol",
    "patient": "Affected side down, knee flexed as condition permits",
    "breathing": "None",
    "demonstrates": "Knee in lateral projection",
    "evaluation": "Femoral condyles substantially superimposed; patella in profile",
    "pitfalls": "Excessive flexion in trauma, rotation"
  },
  {
    "title": "AP Tibia/Fibula",
    "category": "Lower Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to midpoint of lower leg",
    "patient": "Leg extended, foot dorsiflexed if possible; include knee and ankle",
    "breathing": "None",
    "demonstrates": "Entire tibia/fibula and adjacent joints",
    "evaluation": "Knee and ankle included",
    "pitfalls": "Missing joint, rotation"
  },
  {
    "title": "Lateral Tibia/Fibula",
    "category": "Lower Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to midpoint of lower leg",
    "patient": "Affected side down, knee slightly flexed; include knee and ankle",
    "breathing": "None",
    "demonstrates": "Tibia/fibula in lateral projection",
    "evaluation": "Adjacent joints included; distal tibia/fibula near superimposed",
    "pitfalls": "Missing joint, rotation"
  },
  {
    "title": "AP Ankle",
    "category": "Lower Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular midway between malleoli",
    "patient": "Leg extended, foot dorsiflexed",
    "breathing": "None",
    "demonstrates": "Distal tibia/fibula, talus and ankle joint",
    "evaluation": "Ankle mortise partially visible; no rotation",
    "pitfalls": "Plantar flexion, rotation"
  },
  {
    "title": "Mortise Ankle",
    "category": "Lower Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular midway between malleoli",
    "patient": "Internally rotate entire leg about 15–20° until intermalleolar line is parallel to IR",
    "breathing": "None",
    "demonstrates": "Open ankle mortise",
    "evaluation": "Mortise joint space open around talar dome",
    "pitfalls": "Rotating foot only rather than entire leg, too much rotation"
  },
  {
    "title": "Lateral Ankle",
    "category": "Lower Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to medial malleolus",
    "patient": "Affected side down, foot dorsiflexed",
    "breathing": "None",
    "demonstrates": "Ankle in lateral projection",
    "evaluation": "Talar domes near superimposed; distal fibula overlies posterior tibia",
    "pitfalls": "Rotation, plantar flexion"
  },
  {
    "title": "DP Foot",
    "category": "Lower Extremity",
    "sid": "40 in commonly used",
    "cr": "Angled toward heel per protocol, centered to base of 3rd metatarsal",
    "patient": "Supine/seated, plantar surface on IR",
    "breathing": "None",
    "demonstrates": "Phalanges, metatarsals and tarsals",
    "evaluation": "Entire foot included; joint spaces reasonably demonstrated",
    "pitfalls": "Incorrect CR angle, rotation, toes clipped"
  },
  {
    "title": "Medial Oblique Foot",
    "category": "Lower Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to base of 3rd metatarsal",
    "patient": "Rotate foot medially about 30–40°",
    "breathing": "None",
    "demonstrates": "Tarsals and metatarsals with cuboid and base of 5th well demonstrated",
    "evaluation": "Appropriate separation/superimposition of metatarsals",
    "pitfalls": "Under/over rotation"
  },
  {
    "title": "Lateral Foot",
    "category": "Lower Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to base of 3rd metatarsal",
    "patient": "Affected side down, foot dorsiflexed when possible",
    "breathing": "None",
    "demonstrates": "Foot in lateral projection",
    "evaluation": "Metatarsals largely superimposed; talar domes near superimposed",
    "pitfalls": "Rotation, plantar flexion"
  },
  {
    "title": "AP Toes",
    "category": "Lower Extremity",
    "sid": "40 in commonly used",
    "cr": "Angled toward heel per protocol, centered to MTP joint of affected toe",
    "patient": "Plantar surface on IR",
    "breathing": "None",
    "demonstrates": "Phalanges and distal metatarsal",
    "evaluation": "Affected digit completely included",
    "pitfalls": "Toe overlap, wrong centering"
  },
  {
    "title": "Lateral Toe",
    "category": "Lower Extremity",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to IP/MTP region of affected digit",
    "patient": "Separate affected toe from adjacent digits",
    "breathing": "None",
    "demonstrates": "Affected toe in lateral projection",
    "evaluation": "Digit free of superimposition as much as possible",
    "pitfalls": "Adjacent toe overlap"
  },
  {
    "title": "AP Cervical Spine",
    "category": "Spine",
    "sid": "40–72 in depending on protocol",
    "cr": "Cephalic angle commonly used, centered around C4",
    "patient": "Erect or supine, MSP centered, chin slightly elevated",
    "breathing": "Suspend respiration",
    "demonstrates": "Mid/lower cervical vertebrae",
    "evaluation": "C3–T2 region included as protocol requires; minimal rotation",
    "pitfalls": "Mandible over upper cervical spine, rotation"
  },
  {
    "title": "Lateral Cervical Spine",
    "category": "Spine",
    "sid": "72 in commonly used to reduce magnification",
    "cr": "Horizontal/perpendicular around C4",
    "patient": "Erect lateral, shoulders depressed, chin elevated",
    "breathing": "Suspend at end expiration; breathing technique may vary",
    "demonstrates": "C1 through C7/T1 region when shoulders permit",
    "evaluation": "Posterior vertebral bodies near superimposed; C7-T1 visible if possible",
    "pitfalls": "Shoulders obscuring C7-T1, rotation"
  },
  {
    "title": "AP Open-Mouth Odontoid",
    "category": "Spine",
    "sid": "40–44 in commonly used",
    "cr": "Perpendicular through center of open mouth",
    "patient": "Adjust head so lower incisors and skull base are aligned to avoid superimposition",
    "breathing": "Suspend; mouth open during exposure",
    "demonstrates": "Dens and lateral masses of C1",
    "evaluation": "Dens not obscured by teeth or skull base; C1 lateral masses visible",
    "pitfalls": "Chin too high/low, mouth not open"
  },
  {
    "title": "Cervical Obliques",
    "category": "Spine",
    "sid": "60–72 in commonly used",
    "cr": "Angulation/direction depends on AP vs PA oblique method; follow program protocol",
    "patient": "Body rotated about 45°",
    "breathing": "Suspend respiration",
    "demonstrates": "Intervertebral foramina",
    "evaluation": "Foramina open on expected side; cervical spine included",
    "pitfalls": "Wrong tube angle/direction for projection, incorrect body rotation"
  },
  {
    "title": "AP Thoracic Spine",
    "category": "Spine",
    "sid": "40 in commonly used",
    "cr": "Perpendicular around T7",
    "patient": "Supine, MSP centered, knees flexed if helpful",
    "breathing": "Suspend respiration",
    "demonstrates": "Thoracic vertebrae",
    "evaluation": "Spinous processes near midline; vertebral bodies included",
    "pitfalls": "Rotation, poor centering"
  },
  {
    "title": "Lateral Thoracic Spine",
    "category": "Spine",
    "sid": "40 in commonly used",
    "cr": "Perpendicular around T7",
    "patient": "Lateral recumbent, arms elevated; knees flexed",
    "breathing": "Breathing technique may be used to blur ribs/lung markings",
    "demonstrates": "Thoracic vertebral bodies/interspaces",
    "evaluation": "Posterior vertebral bodies near superimposed",
    "pitfalls": "Shoulder superimposition upper T-spine, rotation"
  },
  {
    "title": "AP Lumbar Spine",
    "category": "Spine",
    "sid": "40–48 in commonly used",
    "cr": "Perpendicular around L3, generally just above iliac crests",
    "patient": "Supine, knees flexed to reduce lumbar lordosis when appropriate",
    "breathing": "Suspend at end expiration",
    "demonstrates": "Lumbar vertebrae and sacrum",
    "evaluation": "Spinous processes centered; vertebral bodies included",
    "pitfalls": "Rotation, clipped T12/sacrum"
  },
  {
    "title": "Lateral Lumbar Spine",
    "category": "Spine",
    "sid": "40–48 in commonly used",
    "cr": "Perpendicular around L3; support waist to reduce lateral curvature",
    "patient": "Lateral recumbent, hips/knees flexed",
    "breathing": "Suspend at end expiration",
    "demonstrates": "Lumbar vertebrae and intervertebral spaces",
    "evaluation": "Posterior vertebral bodies near superimposed",
    "pitfalls": "Sag/rotation, incorrect centering"
  },
  {
    "title": "Lumbar Obliques",
    "category": "Spine",
    "sid": "40–48 in commonly used",
    "cr": "Perpendicular around L3",
    "patient": "Rotate body about 45° depending on projection",
    "breathing": "Suspend at end expiration",
    "demonstrates": "Zygapophyseal joints and pars region",
    "evaluation": "Pedicle appearance indicates appropriate obliquity",
    "pitfalls": "Under/over rotation"
  },
  {
    "title": "AP Sacrum",
    "category": "Spine",
    "sid": "40 in commonly used",
    "cr": "Cephalic angle commonly used, centered to sacrum",
    "patient": "Supine, MSP centered",
    "breathing": "Suspend respiration",
    "demonstrates": "Sacrum with reduced foreshortening",
    "evaluation": "Sacrum centered and symmetric",
    "pitfalls": "Incorrect angle, rotation"
  },
  {
    "title": "AP Coccyx",
    "category": "Spine",
    "sid": "40 in commonly used",
    "cr": "Caudal angle commonly used, centered to coccyx",
    "patient": "Supine, MSP centered",
    "breathing": "Suspend respiration",
    "demonstrates": "Coccyx with reduced superimposition",
    "evaluation": "Coccyx visible and centered",
    "pitfalls": "Incorrect angle, bowel gas/fecal superimposition"
  },
  {
    "title": "AP Axial Skull (Towne Method)",
    "category": "Skull/Facial",
    "sid": "40 in commonly used",
    "cr": "Caudal angle according to skull baseline used by program",
    "patient": "MSP perpendicular, chin adjusted to required baseline",
    "breathing": "Suspend respiration",
    "demonstrates": "Occipital bone, foramen magnum region and dorsum sellae relationship",
    "evaluation": "Symmetric skull; dorsum sellae projected within foramen magnum when correctly positioned",
    "pitfalls": "Wrong baseline/angle, head rotation"
  },
  {
    "title": "PA Axial Skull (Caldwell Method)",
    "category": "Skull/Facial",
    "sid": "40 in commonly used",
    "cr": "Caudal angle commonly used; follow program baseline/angle",
    "patient": "Forehead/nose against IR with MSP perpendicular",
    "breathing": "Suspend respiration",
    "demonstrates": "Frontal bone, orbital rims and ethmoid region",
    "evaluation": "Petrous ridges projected in expected lower orbital region depending on angle",
    "pitfalls": "Incorrect chin/angle, rotation"
  },
  {
    "title": "Lateral Skull",
    "category": "Skull/Facial",
    "sid": "40 in commonly used",
    "cr": "Perpendicular about 2 in superior to EAM",
    "patient": "True lateral; IPL perpendicular and IOML horizontal",
    "breathing": "Suspend respiration",
    "demonstrates": "Cranial vault and sella region",
    "evaluation": "Orbital roofs and mandibular rami substantially superimposed",
    "pitfalls": "Tilt or rotation"
  },
  {
    "title": "Paranasal Sinuses — Waters",
    "category": "Skull/Facial",
    "sid": "40 in commonly used",
    "cr": "Horizontal/perpendicular through acanthion with chin extended per method",
    "patient": "Erect preferred for fluid levels; MSP perpendicular",
    "breathing": "Suspend respiration",
    "demonstrates": "Maxillary sinuses prominently; facial structures",
    "evaluation": "Petrous ridges below maxillary sinuses with appropriate extension",
    "pitfalls": "Insufficient chin extension, rotation"
  },
  {
    "title": "Facial Bones — Waters",
    "category": "Skull/Facial",
    "sid": "40 in commonly used",
    "cr": "Perpendicular through acanthion",
    "patient": "Chin extended, MSP perpendicular",
    "breathing": "Suspend respiration",
    "demonstrates": "Facial bones, maxillae, orbital floors",
    "evaluation": "Symmetric facial bones; petrous ridges below maxillary sinuses",
    "pitfalls": "Rotation, incorrect extension"
  },
  {
    "title": "Nasal Bones — Lateral",
    "category": "Skull/Facial",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to bridge of nose",
    "patient": "True lateral with small field and detail technique",
    "breathing": "Suspend respiration",
    "demonstrates": "Nasal bones in profile",
    "evaluation": "Nasal bone cortices visible",
    "pitfalls": "Motion, excessive field size"
  },
  {
    "title": "AP Ribs — Above Diaphragm",
    "category": "Ribs/Sternum",
    "sid": "40–44 in commonly used",
    "cr": "Centered to affected side/level per protocol",
    "patient": "Erect often preferred; rotate as needed for axillary ribs",
    "breathing": "Expose on inspiration",
    "demonstrates": "Ribs above diaphragm",
    "evaluation": "Area of interest included with adequate inspiration",
    "pitfalls": "Wrong breathing phase, region clipped"
  },
  {
    "title": "AP Ribs — Below Diaphragm",
    "category": "Ribs/Sternum",
    "sid": "40–44 in commonly used",
    "cr": "Centered to affected lower ribs per protocol",
    "patient": "Supine commonly used",
    "breathing": "Expose on expiration",
    "demonstrates": "Lower ribs below diaphragm",
    "evaluation": "Area of interest included with diaphragm elevated",
    "pitfalls": "Wrong breathing phase, rotation"
  },
  {
    "title": "RAO Sternum",
    "category": "Ribs/Sternum",
    "sid": "40 in commonly used",
    "cr": "Perpendicular to mid-sternum",
    "patient": "RAO typically 15–20° to project sternum over heart shadow",
    "breathing": "Slow shallow breathing technique often used",
    "demonstrates": "Sternum projected away from thoracic spine",
    "evaluation": "Sternum visible over homogeneous heart shadow",
    "pitfalls": "Too much/too little rotation, motion"
  },
  {
    "title": "Lateral Sternum",
    "category": "Ribs/Sternum",
    "sid": "60–72 in may be used to reduce magnification",
    "cr": "Perpendicular to mid-sternum",
    "patient": "Erect lateral with shoulders drawn back",
    "breathing": "Full inspiration or suspended respiration per protocol",
    "demonstrates": "Sternum in lateral profile",
    "evaluation": "Sternum free of major superimposition",
    "pitfalls": "Rotation, arms/shoulders over sternum"
  },
  {
    "title": "Esophagus — Fluoroscopy Overview",
    "category": "GI/GU",
    "sid": "Procedure-specific fluoroscopy geometry",
    "cr": "Fluoroscopic centering follows anatomy and equipment",
    "patient": "Erect and/or recumbent positions may be used; contrast administered per order/protocol",
    "breathing": "Directed during examination",
    "demonstrates": "Swallowing and esophageal anatomy/motility",
    "evaluation": "Depends on clinical question and images acquired",
    "pitfalls": "Follow radiologist/facility protocol; aspiration risk and contrast choice are clinical considerations"
  },
  {
    "title": "Upper GI Series — Overview",
    "category": "GI/GU",
    "sid": "Procedure-specific fluoroscopy geometry",
    "cr": "Fluoroscopic centering follows stomach/duodenum",
    "patient": "Multiple positions/obliques used as directed",
    "breathing": "Directed during examination",
    "demonstrates": "Stomach and proximal duodenum with contrast",
    "evaluation": "Adequate coating/distention and required anatomy documented",
    "pitfalls": "Protocol varies; contrast and positioning depend on clinical indication"
  },
  {
    "title": "Barium Enema — Overview",
    "category": "GI/GU",
    "sid": "Procedure-specific fluoroscopy geometry",
    "cr": "Fluoroscopic centering follows colon",
    "patient": "Multiple positions/obliques per radiologist/protocol",
    "breathing": "Directed during examination",
    "demonstrates": "Colon with contrast",
    "evaluation": "Required colon segments demonstrated",
    "pitfalls": "Preparation/contrast method varies; follow facility protocol"
  },
  {
    "title": "VCUG — Overview",
    "category": "GI/GU",
    "sid": "Procedure-specific fluoroscopy geometry",
    "cr": "Centered to urinary bladder/urethra",
    "patient": "Positioning varies by age, anatomy, and phase of study",
    "breathing": "As directed",
    "demonstrates": "Bladder and urethra during voiding; reflux when present",
    "evaluation": "Required filling and voiding phases documented",
    "pitfalls": "Strictly follow pediatric/adult facility protocol and sterile technique requirements"
  }
];

const troubleshooterData = [
  {
    "issue": "Noisy / quantum-mottled digital image",
    "category": "Exposure & Noise",
    "likely": [
      "Too few photons reached the detector",
      "mAs too low for the patient/exam",
      "Excessive SID without compensation",
      "Grid use without adequate exposure compensation",
      "Patient size/attenuation greater than expected"
    ],
    "check": [
      "Review exposure indicator/deviation index using the detector manufacturer's meaning",
      "Verify mAs, kVp, SID, grid and patient size",
      "Confirm collimation/processing did not cause exposure-field recognition problems"
    ],
    "correction": [
      "Correct the cause rather than simply changing display brightness",
      "Use appropriate technique compensation per department chart/protocol",
      "Maintain ALARA and avoid unnecessary repeats"
    ],
    "note": "In digital radiography, displayed brightness can be normalized by processing; noise and exposure indicators are more informative than brightness alone."
  },
  {
    "issue": "Exposure indicator suggests detector overexposure",
    "category": "Exposure & Noise",
    "likely": [
      "mAs higher than needed",
      "kVp/technique excessive for the exam",
      "Incorrect AEC chamber selection or anatomy not covering selected chamber",
      "Repeat exposure or wrong technique chart"
    ],
    "check": [
      "Confirm EI/DI meaning for the specific detector",
      "Review AEC chamber selection and positioning",
      "Check technique against department chart"
    ],
    "correction": [
      "Reduce unnecessary detector exposure according to technique chart/protocol",
      "Do not rely on acceptable displayed brightness to justify excessive exposure"
    ],
    "note": "Digital systems can mask overexposure visually, contributing to dose creep."
  },
  {
    "issue": "Underpenetrated appearance / anatomy not adequately penetrated",
    "category": "Exposure & Noise",
    "likely": [
      "kVp insufficient for anatomy",
      "Patient thickness/pathology increased attenuation",
      "Technique selection inappropriate",
      "In some contexts processing/windowing may be the issue rather than acquisition"
    ],
    "check": [
      "Assess EI/DI and image noise",
      "Check whether anatomy behind dense structures is visible",
      "Verify patient thickness and technique"
    ],
    "correction": [
      "Adjust technique according to chart/protocol; kVp is the principal beam-quality/penetration control",
      "Use repeat only when diagnostic information is inadequate"
    ],
    "note": "With digital radiography, 'penetration' and display brightness should not be treated as the same thing."
  },
  {
    "issue": "Excessive scatter / reduced subject contrast",
    "category": "Exposure & Noise",
    "likely": [
      "Large field size",
      "High patient thickness",
      "High kVp relative to exam needs",
      "Grid omitted when indicated"
    ],
    "check": [
      "Review collimation",
      "Check grid indication/alignment",
      "Confirm exam technique"
    ],
    "correction": [
      "Collimate tightly to anatomy of interest",
      "Use grid when indicated by protocol",
      "Select appropriate kVp"
    ],
    "note": "Scatter reaching the receptor reduces image contrast and adds unwanted signal."
  },
  {
    "issue": "Grid cutoff — overall loss of receptor exposure",
    "category": "Grid",
    "likely": [
      "Off-level grid",
      "Off-center grid",
      "Off-focus SID",
      "Upside-down focused grid"
    ],
    "check": [
      "Confirm tube and grid are level",
      "Center CR to grid",
      "Verify SID within grid focal range",
      "Check grid orientation"
    ],
    "correction": [
      "Correct grid alignment before repeating",
      "Use appropriate SID and centering"
    ],
    "note": "The distribution of cutoff can help distinguish the type of grid-alignment error."
  },
  {
    "issue": "Grid cutoff — one side lighter / asymmetric",
    "category": "Grid",
    "likely": [
      "Lateral decentering or off-level alignment",
      "Tube/receptor not aligned",
      "Focused grid used improperly"
    ],
    "check": [
      "Inspect tube centering to grid",
      "Check IR/grid orientation and level"
    ],
    "correction": [
      "Recenter and align tube, patient and receptor"
    ],
    "note": "Asymmetric exposure loss strongly suggests alignment rather than simple technique error."
  },
  {
    "issue": "Motion blur",
    "category": "Sharpness",
    "likely": [
      "Patient motion",
      "Respiratory motion",
      "Long exposure time",
      "Tube/receptor movement"
    ],
    "check": [
      "Inspect cortical margins and markers for generalized blur",
      "Confirm breathing instructions and immobilization",
      "Review exposure time"
    ],
    "correction": [
      "Use clear instructions and immobilization when appropriate",
      "Reduce exposure time while maintaining required mAs if equipment permits",
      "Use appropriate breathing technique"
    ],
    "note": "Motion primarily degrades spatial resolution/recorded detail."
  },
  {
    "issue": "Geometric unsharpness",
    "category": "Sharpness",
    "likely": [
      "Large focal spot",
      "High OID",
      "Short SID"
    ],
    "check": [
      "Review focal spot selection, OID and SID",
      "Determine whether geometry could be improved"
    ],
    "correction": [
      "Use smallest practical focal spot",
      "Minimize OID",
      "Increase SID when appropriate"
    ],
    "note": "Focal spot size and geometry influence edge blur."
  },
  {
    "issue": "Excessive magnification",
    "category": "Geometry",
    "likely": [
      "OID too large",
      "SID too short"
    ],
    "check": [
      "Look for unnecessary gap between anatomy and IR",
      "Review SID"
    ],
    "correction": [
      "Place anatomy as close to IR as safely possible",
      "Increase SID when appropriate"
    ],
    "note": "Magnification factor increases as OID increases and decreases as SID increases."
  },
  {
    "issue": "Foreshortening",
    "category": "Geometry",
    "likely": [
      "Anatomy not parallel to IR",
      "Incorrect part positioning",
      "Central ray/IR relationship inappropriate"
    ],
    "check": [
      "Assess whether the long axis of anatomy was parallel to IR",
      "Review required CR angle"
    ],
    "correction": [
      "Align part and IR according to projection",
      "Use correct tube angle when required"
    ],
    "note": "Foreshortening is shape distortion in which anatomy appears shorter."
  },
  {
    "issue": "Elongation",
    "category": "Geometry",
    "likely": [
      "Central ray not perpendicular to the intended part/IR relationship",
      "IR not correctly aligned",
      "Incorrect tube angle"
    ],
    "check": [
      "Review CR angle and IR position",
      "Assess part alignment"
    ],
    "correction": [
      "Correct CR/IR/part alignment"
    ],
    "note": "Elongation is shape distortion in which anatomy appears longer."
  },
  {
    "issue": "Patient rotation on frontal chest",
    "category": "Positioning",
    "likely": [
      "Thorax not parallel to IR",
      "Patient unable to stand square",
      "Unequal shoulder position"
    ],
    "check": [
      "Compare medial clavicular heads with thoracic spinous processes",
      "Assess rib symmetry"
    ],
    "correction": [
      "Reposition MSP perpendicular and shoulders equidistant from IR when patient condition permits"
    ],
    "note": "Rotation can distort mediastinal contours and lung appearances."
  },
  {
    "issue": "Poor inspiration on chest radiograph",
    "category": "Positioning",
    "likely": [
      "Exposure taken before full inspiration",
      "Pain/illness limits inspiration",
      "Instructions unclear"
    ],
    "check": [
      "Assess diaphragm level and rib count using your program's criteria",
      "Look for crowded basal markings"
    ],
    "correction": [
      "Coach breathing before exposure when patient condition permits",
      "Time exposure at full inspiration"
    ],
    "note": "Poor inspiration can make the lungs appear denser and the heart appear larger."
  },
  {
    "issue": "Scapulae over lung fields on PA chest",
    "category": "Positioning",
    "likely": [
      "Shoulders not rolled forward",
      "Hands/arms positioned poorly",
      "Patient not against IR correctly"
    ],
    "check": [
      "Assess scapular borders over upper lungs"
    ],
    "correction": [
      "Roll shoulders forward and down; position hands/arms as taught by program"
    ],
    "note": "The goal is to move scapulae laterally from most of the lung fields."
  },
  {
    "issue": "Clipped anatomy",
    "category": "Collimation & Centering",
    "likely": [
      "Incorrect centering",
      "IR too small or wrong orientation",
      "Collimation too tight before verifying anatomy",
      "Patient moved after alignment"
    ],
    "check": [
      "Identify which required anatomy is missing",
      "Review CR and IR placement"
    ],
    "correction": [
      "Recenter/reselect IR orientation; collimate after confirming required anatomy"
    ],
    "note": "A technically beautiful image is still inadequate if required anatomy is excluded."
  },
  {
    "issue": "Field too large / unnecessary anatomy exposed",
    "category": "Collimation & Centering",
    "likely": [
      "Collimation left open",
      "Uncertainty about anatomy location",
      "Poor centering"
    ],
    "check": [
      "Compare field with required anatomy",
      "Confirm landmarks"
    ],
    "correction": [
      "Collimate to the area of clinical interest while including required anatomy"
    ],
    "note": "Collimation reduces patient exposure and scatter."
  },
  {
    "issue": "External artifact on image",
    "category": "Artifacts",
    "likely": [
      "Jewelry",
      "Clothing/snaps",
      "Hair/objects",
      "ECG leads or removable items",
      "Detector contamination"
    ],
    "check": [
      "Determine whether object is external and removable",
      "Check for repeatable detector artifact pattern"
    ],
    "correction": [
      "Remove avoidable artifacts before exposure; clean/inspect detector per protocol if equipment-related"
    ],
    "note": "Do not remove medically necessary devices solely for image appearance."
  },
  {
    "issue": "Histogram / exposure-field recognition error",
    "category": "Digital Processing",
    "likely": [
      "Poor collimation",
      "Multiple fields handled improperly",
      "Unexpected prosthesis/metal",
      "Incorrect exam menu",
      "Image processing segmentation error"
    ],
    "check": [
      "Review collimation and selected processing algorithm",
      "Check whether anatomy/field borders were recognized correctly"
    ],
    "correction": [
      "Select correct exam/protocol and collimate appropriately",
      "Follow vendor/facility workflow for reprocessing rather than masking acquisition errors"
    ],
    "note": "Digital processing errors can alter displayed brightness/contrast even when detector exposure was reasonable."
  },
  {
    "issue": "Wrong anatomy marker / missing side marker",
    "category": "Identification",
    "likely": [
      "Marker omitted",
      "Marker placed outside collimated field",
      "Incorrect marker used",
      "Post-processing annotation substituted improperly"
    ],
    "check": [
      "Verify patient side and marker visibility",
      "Follow facility policy for digital annotations"
    ],
    "correction": [
      "Use a correct physical lead marker at acquisition when required by policy"
    ],
    "note": "Do not guess laterality; follow department policy when a marker is missing."
  },
  {
    "issue": "Anatomy appears rotated on AP pelvis",
    "category": "Positioning",
    "likely": [
      "Pelvis rotated",
      "Legs positioned asymmetrically",
      "Pain or trauma prevented standard positioning"
    ],
    "check": [
      "Compare iliac wings and obturator foramina",
      "Assess sacrum/coccyx relative to pubic symphysis"
    ],
    "correction": [
      "Correct pelvis alignment when safe; document/adapt for trauma or limited mobility"
    ],
    "note": "Do not force leg rotation when fracture/dislocation is suspected."
  },
  {
    "issue": "Femoral neck foreshortened on AP pelvis/hip",
    "category": "Positioning",
    "likely": [
      "Leg not internally rotated enough in non-trauma patient",
      "Pelvis rotated"
    ],
    "check": [
      "Assess lesser trochanter prominence and femoral neck profile"
    ],
    "correction": [
      "Internally rotate leg as taught when not contraindicated"
    ],
    "note": "Trauma patients may require neutral positioning and alternate projections."
  },
  {
    "issue": "Ankle mortise not open",
    "category": "Positioning",
    "likely": [
      "Insufficient or excessive internal rotation",
      "Only foot rotated instead of entire leg"
    ],
    "check": [
      "Assess tibiofibular overlap and mortise joint space"
    ],
    "correction": [
      "Rotate entire leg to the required mortise position"
    ],
    "note": "The exact rotation target is commonly around 15–20°, but anatomy and program criteria matter."
  },
  {
    "issue": "Lateral knee condyles not superimposed",
    "category": "Positioning",
    "likely": [
      "Knee rotated",
      "Femur not parallel to IR",
      "Tube angle/part alignment mismatched"
    ],
    "check": [
      "Compare posterior and distal femoral condyles"
    ],
    "correction": [
      "Adjust rotation and flexion; use program-specific CR angle"
    ],
    "note": "Patient anatomy and body habitus can affect the small CR angle used."
  },
  {
    "issue": "C7–T1 not visible on lateral cervical spine",
    "category": "Positioning",
    "likely": [
      "Shoulders not depressed",
      "SID/centering inadequate",
      "Patient habitus",
      "Exposure inadequate through shoulders"
    ],
    "check": [
      "Confirm shoulders relaxed/depressed",
      "Verify CR at C4 and field includes cervicothoracic junction"
    ],
    "correction": [
      "Repeat breathing/shoulder instructions; consider swimmer's view if ordered/required by protocol"
    ],
    "note": "Do not force shoulders in trauma; adapt safely."
  },
  {
    "issue": "Odontoid obscured on open-mouth view",
    "category": "Positioning",
    "likely": [
      "Chin too high or too low",
      "Mouth not fully open",
      "Head rotation"
    ],
    "check": [
      "If teeth obscure dens, head position differs from when skull base obscures dens",
      "Assess lateral mass symmetry"
    ],
    "correction": [
      "Adjust head baseline and repeat only if necessary/appropriate"
    ],
    "note": "Program-specific landmarking teaches the relationship between lower incisors and skull base."
  }
];
