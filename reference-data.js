// RadDesk reference library.
// Definitions are concise study aids written for this project.
// External resource entries link to their original publishers; article text is not copied into RadDesk.

const terms = [
  {
    "title": "Absorption",
    "body": "Complete transfer of an x-ray photon's energy to matter; the photon no longer continues in the beam.",
    "category": "Physics"
  },
  {
    "title": "Acquisition",
    "body": "The process of collecting image data from the patient.",
    "category": "Digital Imaging"
  },
  {
    "title": "Aliasing",
    "body": "A sampling artifact that occurs when a signal is sampled too slowly to represent it accurately.",
    "category": "Digital Imaging"
  },
  {
    "title": "Anatomic position",
    "body": "Standard reference position: standing erect, facing forward, arms at sides, palms forward.",
    "category": "Positioning"
  },
  {
    "title": "Anode",
    "body": "Positive electrode of the x-ray tube; contains the target where x-rays are produced.",
    "category": "Equipment"
  },
  {
    "title": "Anode heel effect",
    "body": "Variation in x-ray intensity across the field caused by absorption within the anode; intensity is greater on the cathode side.",
    "category": "Physics"
  },
  {
    "title": "Anteroposterior projection",
    "body": "Projection in which the central ray enters the anterior surface and exits posteriorly.",
    "category": "Positioning"
  },
  {
    "title": "Artifact",
    "body": "An unwanted image feature that does not represent the patient's actual anatomy or pathology.",
    "category": "Image Quality"
  },
  {
    "title": "Attenuation",
    "body": "Reduction in x-ray beam intensity through absorption and scatter as the beam passes through matter.",
    "category": "Physics"
  },
  {
    "title": "Automatic exposure control",
    "body": "System that terminates an exposure after sufficient radiation reaches the detector.",
    "category": "Equipment"
  },
  {
    "title": "Beam",
    "body": "A collection of x-ray photons traveling in a generally common direction.",
    "category": "Physics"
  },
  {
    "title": "Beam restriction",
    "body": "Limiting the size and shape of the x-ray field, usually with collimation.",
    "category": "Radiation Protection"
  },
  {
    "title": "Bucky",
    "body": "A device that contains a moving grid and usually an image receptor tray.",
    "category": "Equipment"
  },
  {
    "title": "Cathode",
    "body": "Negative electrode of the x-ray tube; contains the filament and focusing cup.",
    "category": "Equipment"
  },
  {
    "title": "Central ray",
    "body": "Center portion of the x-ray beam used as the reference for alignment and positioning.",
    "category": "Positioning"
  },
  {
    "title": "Collimation",
    "body": "Restriction of the x-ray beam to the area of clinical interest.",
    "category": "Radiation Protection"
  },
  {
    "title": "Compton scatter",
    "body": "Interaction in which an x-ray photon ejects an outer-shell electron and changes direction with reduced energy.",
    "category": "Physics"
  },
  {
    "title": "Contrast",
    "body": "Difference in image brightness or density between adjacent structures.",
    "category": "Image Quality"
  },
  {
    "title": "Contrast resolution",
    "body": "Ability of an imaging system to distinguish structures with small differences in signal or attenuation.",
    "category": "Image Quality"
  },
  {
    "title": "Density",
    "body": "Traditional film-screen term describing overall blackening of a radiograph; in digital imaging, brightness is controlled differently.",
    "category": "Image Quality"
  },
  {
    "title": "Detector",
    "body": "Device that receives remnant radiation or another imaging signal and converts it into image data.",
    "category": "Digital Imaging"
  },
  {
    "title": "Diagnostic quality",
    "body": "Image quality sufficient to answer the clinical question while using appropriate exposure.",
    "category": "Image Quality"
  },
  {
    "title": "Digital radiography",
    "body": "Radiographic imaging using an electronic detector that directly or indirectly converts x-ray energy into digital data.",
    "category": "Digital Imaging"
  },
  {
    "title": "Distortion",
    "body": "Misrepresentation of the true size or shape of anatomy on an image.",
    "category": "Image Quality"
  },
  {
    "title": "Dose",
    "body": "Amount of ionizing radiation energy delivered to or absorbed by matter.",
    "category": "Radiation Protection"
  },
  {
    "title": "Dose creep",
    "body": "Gradual increase in radiographic exposure over time, often because digital systems can mask overexposure.",
    "category": "Radiation Protection"
  },
  {
    "title": "Dynamic range",
    "body": "Range of exposure values an imaging detector can capture and represent.",
    "category": "Digital Imaging"
  },
  {
    "title": "Effective dose",
    "body": "Radiation protection quantity that estimates overall stochastic risk by accounting for dose to different tissues.",
    "category": "Radiation Protection"
  },
  {
    "title": "Entrance skin exposure",
    "body": "Radiation exposure measured at the point where the beam enters the patient's skin.",
    "category": "Radiation Protection"
  },
  {
    "title": "Exposure",
    "body": "Interaction of ionizing radiation with matter; also commonly used to describe the act of producing a radiograph.",
    "category": "Physics"
  },
  {
    "title": "Exposure indicator",
    "body": "Vendor-specific numerical indicator related to the amount of radiation reaching a digital detector.",
    "category": "Digital Imaging"
  },
  {
    "title": "Field of view",
    "body": "Area of anatomy included in an image or reconstruction.",
    "category": "Digital Imaging"
  },
  {
    "title": "Filament",
    "body": "Coiled tungsten wire in the cathode that emits electrons when heated.",
    "category": "Equipment"
  },
  {
    "title": "Filtration",
    "body": "Removal of low-energy photons from the x-ray beam, reducing unnecessary patient skin dose.",
    "category": "Radiation Protection"
  },
  {
    "title": "Focal spot",
    "body": "Area on the anode target where electrons interact and x-rays are produced.",
    "category": "Equipment"
  },
  {
    "title": "Focusing cup",
    "body": "Negatively charged cathode structure that directs electrons toward the focal spot.",
    "category": "Equipment"
  },
  {
    "title": "Fog",
    "body": "Unwanted exposure or signal that reduces image contrast.",
    "category": "Image Quality"
  },
  {
    "title": "Grid",
    "body": "Device containing radiopaque strips that reduces scatter reaching the image receptor.",
    "category": "Equipment"
  },
  {
    "title": "Grid cutoff",
    "body": "Loss of primary radiation caused by improper grid alignment, centering, SID, or orientation.",
    "category": "Image Quality"
  },
  {
    "title": "Grid ratio",
    "body": "Height of grid strips divided by the width of the interspace between them.",
    "category": "Equipment"
  },
  {
    "title": "Half-value layer",
    "body": "Thickness of a material required to reduce x-ray beam intensity to one-half its original value.",
    "category": "Physics"
  },
  {
    "title": "Histogram",
    "body": "Graphical representation of pixel-value distribution used by digital systems during image processing.",
    "category": "Digital Imaging"
  },
  {
    "title": "Image receptor",
    "body": "Device that receives the remnant x-ray beam and records image information.",
    "category": "Digital Imaging"
  },
  {
    "title": "Image noise",
    "body": "Random variation in image signal that can obscure low-contrast detail.",
    "category": "Image Quality"
  },
  {
    "title": "Inverse square law",
    "body": "Relationship stating that radiation intensity varies inversely with the square of the distance from a point source.",
    "category": "Physics"
  },
  {
    "title": "Ionization",
    "body": "Removal or addition of electrons from an atom, producing a charged ion.",
    "category": "Physics"
  },
  {
    "title": "Ionizing radiation",
    "body": "Radiation with enough energy to remove electrons from atoms.",
    "category": "Physics"
  },
  {
    "title": "Kilovoltage peak",
    "body": "Maximum tube voltage applied during an x-ray exposure; strongly influences photon energy and penetration.",
    "category": "Exposure Factors"
  },
  {
    "title": "Latent image",
    "body": "Invisible stored image information present before processing or readout.",
    "category": "Digital Imaging"
  },
  {
    "title": "Long-scale contrast",
    "body": "Image appearance with many shades of gray and relatively low contrast.",
    "category": "Image Quality"
  },
  {
    "title": "Magnification",
    "body": "Increase in the apparent size of an object on the image compared with its actual size.",
    "category": "Image Quality"
  },
  {
    "title": "Milliampere",
    "body": "Tube current; relates to the number of electrons traveling from cathode to anode per unit time.",
    "category": "Exposure Factors"
  },
  {
    "title": "Milliampere-second",
    "body": "Product of tube current and exposure time; primarily controls x-ray photon quantity.",
    "category": "Exposure Factors"
  },
  {
    "title": "Modulation transfer function",
    "body": "Measure of how well an imaging system transfers object contrast at different spatial frequencies.",
    "category": "Image Quality"
  },
  {
    "title": "Object-to-image distance",
    "body": "Distance between the object being imaged and the image receptor.",
    "category": "Geometry"
  },
  {
    "title": "Penetration",
    "body": "Ability of an x-ray beam to pass through matter.",
    "category": "Physics"
  },
  {
    "title": "Photoelectric effect",
    "body": "Interaction in which an x-ray photon is completely absorbed and ejects an inner-shell electron.",
    "category": "Physics"
  },
  {
    "title": "Pixel",
    "body": "Smallest individual picture element in a digital image matrix.",
    "category": "Digital Imaging"
  },
  {
    "title": "Posteroanterior projection",
    "body": "Projection in which the central ray enters posteriorly and exits anteriorly.",
    "category": "Positioning"
  },
  {
    "title": "Primary radiation",
    "body": "X-ray photons traveling from the tube before interacting with the patient or other matter.",
    "category": "Physics"
  },
  {
    "title": "Quantum mottle",
    "body": "Noise caused by an insufficient number of detected x-ray photons.",
    "category": "Image Quality"
  },
  {
    "title": "Radiation protection",
    "body": "Practices used to minimize unnecessary exposure to patients, workers, and the public.",
    "category": "Radiation Protection"
  },
  {
    "title": "Radiolucent",
    "body": "Permits relatively more x-rays to pass; appears darker on a radiograph.",
    "category": "Image Appearance"
  },
  {
    "title": "Radiopaque",
    "body": "Attenuates relatively more x-rays; appears lighter or whiter on a radiograph.",
    "category": "Image Appearance"
  },
  {
    "title": "Remnant radiation",
    "body": "Radiation exiting the patient and reaching the image receptor.",
    "category": "Physics"
  },
  {
    "title": "Scatter radiation",
    "body": "Radiation that changes direction after interacting with matter.",
    "category": "Physics"
  },
  {
    "title": "Short-scale contrast",
    "body": "Image appearance with fewer shades of gray and relatively high contrast.",
    "category": "Image Quality"
  },
  {
    "title": "Source-to-image distance",
    "body": "Distance from the x-ray tube focal spot to the image receptor.",
    "category": "Geometry"
  },
  {
    "title": "Source-to-object distance",
    "body": "Distance from the x-ray tube focal spot to the object being imaged.",
    "category": "Geometry"
  },
  {
    "title": "Spatial resolution",
    "body": "Ability to display small objects that are close together as separate structures.",
    "category": "Image Quality"
  },
  {
    "title": "Stochastic effect",
    "body": "Radiation effect for which probability, rather than severity, increases with dose; cancer is the main concern.",
    "category": "Radiation Biology"
  },
  {
    "title": "Tissue reaction",
    "body": "Radiation effect with a threshold dose; severity increases as dose increases above the threshold.",
    "category": "Radiation Biology"
  },
  {
    "title": "Tube current",
    "body": "Flow of electrons from cathode to anode, measured in milliamperes.",
    "category": "Exposure Factors"
  },
  {
    "title": "Tube voltage",
    "body": "Electrical potential difference across the x-ray tube, commonly expressed as kVp.",
    "category": "Exposure Factors"
  },
  {
    "title": "Voxel",
    "body": "Three-dimensional volume element represented in cross-sectional imaging.",
    "category": "Digital Imaging"
  },
  {
    "title": "Window level",
    "body": "CT display setting that controls the center attenuation value of the displayed grayscale range.",
    "category": "CT"
  },
  {
    "title": "Window width",
    "body": "CT display setting that controls the range of attenuation values displayed.",
    "category": "CT"
  },
  {
    "title": "Hounsfield unit",
    "body": "CT number representing relative x-ray attenuation; water is approximately 0 HU and air approximately -1000 HU.",
    "category": "CT"
  },
  {
    "title": "Pitch",
    "body": "In helical CT, table travel per gantry rotation relative to the total collimated beam width.",
    "category": "CT"
  },
  {
    "title": "Slice thickness",
    "body": "Thickness of anatomy represented by a reconstructed CT or MR image slice.",
    "category": "CT/MRI"
  },
  {
    "title": "Reconstruction",
    "body": "Mathematical process used to create an image from acquired projection or signal data.",
    "category": "CT/MRI"
  },
  {
    "title": "Kernel",
    "body": "CT reconstruction filter that influences image sharpness and noise.",
    "category": "CT"
  },
  {
    "title": "Partial volume effect",
    "body": "Averaging of different tissues within one voxel, potentially obscuring small structures.",
    "category": "CT/MRI"
  },
  {
    "title": "Multiplanar reconstruction",
    "body": "Reformatting volumetric data into planes such as coronal or sagittal.",
    "category": "CT"
  },
  {
    "title": "Maximum intensity projection",
    "body": "Post-processing method that displays the highest-value voxels along a viewing path.",
    "category": "CT/MRI"
  },
  {
    "title": "Region of interest",
    "body": "Selected image area used for measurement or analysis.",
    "category": "Digital Imaging"
  },
  {
    "title": "Axial plane",
    "body": "Transverse plane dividing the body into superior and inferior portions.",
    "category": "Anatomy"
  },
  {
    "title": "Coronal plane",
    "body": "Plane dividing the body into anterior and posterior portions.",
    "category": "Anatomy"
  },
  {
    "title": "Sagittal plane",
    "body": "Plane dividing the body into right and left portions.",
    "category": "Anatomy"
  },
  {
    "title": "Midsagittal plane",
    "body": "Sagittal plane passing through the midline, dividing the body into approximately equal right and left halves.",
    "category": "Anatomy"
  },
  {
    "title": "Oblique plane",
    "body": "Plane angled between standard anatomical planes.",
    "category": "Anatomy"
  },
  {
    "title": "Anterior",
    "body": "Toward the front of the body.",
    "category": "Anatomy"
  },
  {
    "title": "Posterior",
    "body": "Toward the back of the body.",
    "category": "Anatomy"
  },
  {
    "title": "Superior",
    "body": "Toward the head or upper part of a structure.",
    "category": "Anatomy"
  },
  {
    "title": "Inferior",
    "body": "Toward the feet or lower part of a structure.",
    "category": "Anatomy"
  },
  {
    "title": "Medial",
    "body": "Toward the midline.",
    "category": "Anatomy"
  },
  {
    "title": "Lateral",
    "body": "Away from the midline.",
    "category": "Anatomy"
  },
  {
    "title": "Proximal",
    "body": "Closer to the trunk or point of origin.",
    "category": "Anatomy"
  },
  {
    "title": "Distal",
    "body": "Farther from the trunk or point of origin.",
    "category": "Anatomy"
  },
  {
    "title": "Ipsilateral",
    "body": "On the same side of the body.",
    "category": "Anatomy"
  },
  {
    "title": "Contralateral",
    "body": "On the opposite side of the body.",
    "category": "Anatomy"
  },
  {
    "title": "Cephalic",
    "body": "Directed toward the head.",
    "category": "Positioning"
  },
  {
    "title": "Caudal",
    "body": "Directed toward the feet.",
    "category": "Positioning"
  },
  {
    "title": "Supine",
    "body": "Lying on the back, face upward.",
    "category": "Positioning"
  },
  {
    "title": "Prone",
    "body": "Lying on the abdomen, face downward.",
    "category": "Positioning"
  },
  {
    "title": "Erect",
    "body": "Upright position, usually standing or sitting.",
    "category": "Positioning"
  },
  {
    "title": "Recumbent",
    "body": "Lying down in any position.",
    "category": "Positioning"
  },
  {
    "title": "Decubitus",
    "body": "Recumbent position using a horizontal x-ray beam; named for the side that is down.",
    "category": "Positioning"
  },
  {
    "title": "Trendelenburg position",
    "body": "Supine position with the head lower than the feet.",
    "category": "Positioning"
  },
  {
    "title": "Fowler position",
    "body": "Semi-upright position with the head of the bed elevated.",
    "category": "Positioning"
  },
  {
    "title": "Rotation",
    "body": "Turning the body or body part around its longitudinal axis.",
    "category": "Positioning"
  },
  {
    "title": "Flexion",
    "body": "Decreasing the angle between two body parts.",
    "category": "Positioning"
  },
  {
    "title": "Extension",
    "body": "Increasing the angle between two body parts.",
    "category": "Positioning"
  },
  {
    "title": "Abduction",
    "body": "Movement away from the body's midline.",
    "category": "Positioning"
  },
  {
    "title": "Adduction",
    "body": "Movement toward the body's midline.",
    "category": "Positioning"
  },
  {
    "title": "Internal rotation",
    "body": "Rotation toward the midline.",
    "category": "Positioning"
  },
  {
    "title": "External rotation",
    "body": "Rotation away from the midline.",
    "category": "Positioning"
  },
  {
    "title": "Projection",
    "body": "Path of the central ray through the patient to the image receptor.",
    "category": "Positioning"
  },
  {
    "title": "Position",
    "body": "Physical posture or placement of the patient.",
    "category": "Positioning"
  },
  {
    "title": "View",
    "body": "Common clinical term for an image; technically, projection and position are more precise radiographic terms.",
    "category": "Positioning"
  },
  {
    "title": "Tangential projection",
    "body": "Projection that skims a body surface or structure to demonstrate it in profile.",
    "category": "Positioning"
  },
  {
    "title": "Lordotic position",
    "body": "Position used to project structures such as the clavicles above the lung apices on an AP axial chest image.",
    "category": "Positioning"
  },
  {
    "title": "Inspiration",
    "body": "Breathing air into the lungs.",
    "category": "Patient Care"
  },
  {
    "title": "Expiration",
    "body": "Breathing air out of the lungs.",
    "category": "Patient Care"
  },
  {
    "title": "Apnea",
    "body": "Temporary absence of breathing.",
    "category": "Patient Care"
  },
  {
    "title": "Dyspnea",
    "body": "Difficult or labored breathing.",
    "category": "Patient Care"
  },
  {
    "title": "Orthopnea",
    "body": "Difficulty breathing when lying flat.",
    "category": "Patient Care"
  },
  {
    "title": "Syncope",
    "body": "Temporary loss of consciousness caused by reduced cerebral blood flow.",
    "category": "Patient Care"
  },
  {
    "title": "Asepsis",
    "body": "Practices intended to prevent contamination by pathogenic microorganisms.",
    "category": "Patient Care"
  },
  {
    "title": "Medical asepsis",
    "body": "Clean technique used to reduce the number and spread of microorganisms.",
    "category": "Patient Care"
  },
  {
    "title": "Surgical asepsis",
    "body": "Sterile technique used to eliminate microorganisms from an area or field.",
    "category": "Patient Care"
  },
  {
    "title": "Standard precautions",
    "body": "Infection-control practices applied to all patients regardless of suspected infection status.",
    "category": "Patient Care"
  },
  {
    "title": "Nosocomial infection",
    "body": "Infection acquired in a health care setting; often called a health care-associated infection.",
    "category": "Patient Care"
  },
  {
    "title": "Contrast medium",
    "body": "Substance administered to improve visualization of anatomy or physiology on an imaging exam.",
    "category": "Contrast"
  },
  {
    "title": "Positive contrast",
    "body": "Contrast material that attenuates x-rays strongly, such as iodine or barium.",
    "category": "Contrast"
  },
  {
    "title": "Negative contrast",
    "body": "Low-attenuation contrast such as air or carbon dioxide used to improve visualization.",
    "category": "Contrast"
  },
  {
    "title": "Extravasation",
    "body": "Unintended leakage of injected fluid or contrast from a vessel into surrounding tissue.",
    "category": "Contrast"
  },
  {
    "title": "Anaphylaxis",
    "body": "Severe, potentially life-threatening systemic hypersensitivity reaction.",
    "category": "Patient Care"
  },
  {
    "title": "Infiltration",
    "body": "Leakage of nonvesicant IV fluid into surrounding tissue.",
    "category": "Patient Care"
  },
  {
    "title": "Venipuncture",
    "body": "Puncture of a vein, usually to obtain blood or establish intravenous access.",
    "category": "Patient Care"
  },
  {
    "title": "Bolus",
    "body": "A quantity of medication or contrast administered over a relatively short period.",
    "category": "Contrast"
  },
  {
    "title": "Iodinated contrast",
    "body": "Iodine-containing contrast commonly used in CT, angiography, and other x-ray procedures.",
    "category": "Contrast"
  },
  {
    "title": "Barium sulfate",
    "body": "Radiopaque contrast commonly used to evaluate the gastrointestinal tract.",
    "category": "Contrast"
  },
  {
    "title": "Gadolinium-based contrast agent",
    "body": "Contrast agent commonly used in MRI to alter tissue signal characteristics.",
    "category": "MRI"
  },
  {
    "title": "Echogenicity",
    "body": "Degree to which tissue reflects ultrasound waves.",
    "category": "Ultrasound"
  },
  {
    "title": "Anechoic",
    "body": "Producing no internal ultrasound echoes; typically appears black.",
    "category": "Ultrasound"
  },
  {
    "title": "Hypoechoic",
    "body": "Producing fewer echoes than surrounding tissue; appears relatively darker.",
    "category": "Ultrasound"
  },
  {
    "title": "Hyperechoic",
    "body": "Producing more echoes than surrounding tissue; appears relatively brighter.",
    "category": "Ultrasound"
  },
  {
    "title": "Acoustic shadowing",
    "body": "Dark region deep to a strongly attenuating or reflecting structure on ultrasound.",
    "category": "Ultrasound"
  },
  {
    "title": "Posterior acoustic enhancement",
    "body": "Increased echoes deep to a structure that attenuates sound less than surrounding tissue, often fluid.",
    "category": "Ultrasound"
  },
  {
    "title": "Doppler",
    "body": "Ultrasound technique that evaluates motion, commonly blood flow, using frequency shifts.",
    "category": "Ultrasound"
  },
  {
    "title": "Frequency",
    "body": "Number of wave cycles per second, measured in hertz.",
    "category": "Physics"
  },
  {
    "title": "Wavelength",
    "body": "Distance between corresponding points of successive waves.",
    "category": "Physics"
  },
  {
    "title": "T1-weighted",
    "body": "MRI image weighting in which fat is commonly bright and simple fluid is relatively dark.",
    "category": "MRI"
  },
  {
    "title": "T2-weighted",
    "body": "MRI image weighting in which fluid is commonly bright.",
    "category": "MRI"
  },
  {
    "title": "FLAIR",
    "body": "MRI sequence that suppresses free-fluid signal, especially CSF, while retaining many T2-sensitive abnormalities.",
    "category": "MRI"
  },
  {
    "title": "Diffusion-weighted imaging",
    "body": "MRI technique sensitive to microscopic water motion and commonly used in acute stroke imaging.",
    "category": "MRI"
  },
  {
    "title": "Apparent diffusion coefficient",
    "body": "Calculated MRI map used with diffusion imaging to help characterize restricted diffusion.",
    "category": "MRI"
  },
  {
    "title": "Gradient echo",
    "body": "MRI pulse-sequence family using gradient reversals rather than a 180-degree refocusing pulse.",
    "category": "MRI"
  },
  {
    "title": "STIR",
    "body": "MRI inversion-recovery sequence commonly used to suppress fat signal.",
    "category": "MRI"
  },
  {
    "title": "Repetition time",
    "body": "MRI sequence timing parameter measuring time between successive excitation pulses for a slice or volume.",
    "category": "MRI"
  },
  {
    "title": "Echo time",
    "body": "MRI sequence timing parameter measuring time from excitation to signal echo measurement.",
    "category": "MRI"
  },
  {
    "title": "Signal intensity",
    "body": "Relative brightness of tissue on MRI based on the detected MR signal.",
    "category": "MRI"
  },
  {
    "title": "Proton density",
    "body": "MRI weighting emphasizing differences in hydrogen proton concentration.",
    "category": "MRI"
  },
  {
    "title": "Magnetic susceptibility",
    "body": "Degree to which a material becomes magnetized in an external magnetic field; differences can create MRI artifacts.",
    "category": "MRI"
  },
  {
    "title": "Ferromagnetic",
    "body": "Strongly attracted to a magnetic field and capable of retaining magnetization.",
    "category": "MRI Safety"
  },
  {
    "title": "Quench",
    "body": "Rapid loss of superconductivity in an MRI magnet, causing cryogen boil-off and loss of the main magnetic field.",
    "category": "MRI Safety"
  },
  {
    "title": "Radiofrequency pulse",
    "body": "Electromagnetic pulse used in MRI to excite hydrogen nuclei.",
    "category": "MRI"
  },
  {
    "title": "Larmor frequency",
    "body": "Precession frequency of nuclei in a magnetic field; proportional to magnetic field strength.",
    "category": "MRI"
  },
  {
    "title": "Computed radiography",
    "body": "Digital radiography method using a photostimulable phosphor imaging plate that is read by a scanner.",
    "category": "Digital Imaging"
  },
  {
    "title": "Direct conversion detector",
    "body": "Digital detector that converts x-ray energy directly into electrical charge.",
    "category": "Digital Imaging"
  },
  {
    "title": "Indirect conversion detector",
    "body": "Digital detector that first converts x-rays to light and then light to electrical charge.",
    "category": "Digital Imaging"
  },
  {
    "title": "PACS",
    "body": "System used to store, retrieve, distribute, and display medical images.",
    "category": "Informatics"
  },
  {
    "title": "DICOM",
    "body": "Standard for formatting, storing, and communicating medical imaging information.",
    "category": "Informatics"
  },
  {
    "title": "RIS",
    "body": "Information system supporting radiology scheduling, tracking, reporting, and workflow.",
    "category": "Informatics"
  },
  {
    "title": "HIS",
    "body": "Hospital information system used to manage broader clinical and administrative information.",
    "category": "Informatics"
  },
  {
    "title": "Modality worklist",
    "body": "DICOM service that sends scheduled patient and procedure information to imaging equipment.",
    "category": "Informatics"
  },
  {
    "title": "Windowing",
    "body": "Adjustment of displayed grayscale range to emphasize selected tissue attenuation values.",
    "category": "CT"
  },
  {
    "title": "Annotation",
    "body": "Text, marker, or symbol added to an image to identify anatomy, side, position, or other information.",
    "category": "Digital Imaging"
  },
  {
    "title": "Post-processing",
    "body": "Image manipulation performed after acquisition, such as windowing, reformatting, or edge enhancement.",
    "category": "Digital Imaging"
  },
  {
    "title": "Rescaling",
    "body": "Digital processing that maps acquired detector values into a display range.",
    "category": "Digital Imaging"
  },
  {
    "title": "Resampling",
    "body": "Changing image matrix or voxel sampling during processing or reconstruction.",
    "category": "Digital Imaging"
  },
  {
    "title": "Exposure latitude",
    "body": "Range of exposures that can produce an acceptable image; digital systems generally have wider latitude than film-screen.",
    "category": "Digital Imaging"
  },
  {
    "title": "Saturation",
    "body": "Condition in which detector exposure exceeds a system's useful recording range.",
    "category": "Digital Imaging"
  },
  {
    "title": "Clipping",
    "body": "Loss of image information when values outside a selected range are forced to minimum or maximum display values.",
    "category": "Digital Imaging"
  },
  {
    "title": "Bit depth",
    "body": "Number of bits used to represent each pixel; determines the number of possible grayscale values.",
    "category": "Digital Imaging"
  },
  {
    "title": "Matrix",
    "body": "Two-dimensional arrangement of pixels forming a digital image.",
    "category": "Digital Imaging"
  },
  {
    "title": "Field size",
    "body": "Dimensions of the irradiated area at a specified plane.",
    "category": "Radiation Protection"
  },
  {
    "title": "Scatter fog",
    "body": "Loss of image contrast caused by scattered radiation reaching the receptor.",
    "category": "Image Quality"
  },
  {
    "title": "Geometric unsharpness",
    "body": "Blur caused by focal spot size and imaging geometry.",
    "category": "Image Quality"
  },
  {
    "title": "Motion unsharpness",
    "body": "Blur caused by movement of the patient, anatomy, or equipment during acquisition.",
    "category": "Image Quality"
  },
  {
    "title": "Shape distortion",
    "body": "Misrepresentation of object shape, including elongation and foreshortening.",
    "category": "Image Quality"
  },
  {
    "title": "Elongation",
    "body": "Shape distortion in which anatomy appears longer than its true length.",
    "category": "Image Quality"
  },
  {
    "title": "Foreshortening",
    "body": "Shape distortion in which anatomy appears shorter than its true length.",
    "category": "Image Quality"
  },
  {
    "title": "Elongation error",
    "body": "Distortion commonly caused by misalignment between tube, object, and receptor.",
    "category": "Positioning"
  },
  {
    "title": "Recorded detail",
    "body": "Traditional radiography term describing visibility of small structural detail; closely related to spatial resolution.",
    "category": "Image Quality"
  },
  {
    "title": "Contrast-to-noise ratio",
    "body": "Difference in signal between structures relative to image noise.",
    "category": "Image Quality"
  },
  {
    "title": "Signal-to-noise ratio",
    "body": "Strength of useful image signal relative to random noise.",
    "category": "Image Quality"
  },
  {
    "title": "ALARA",
    "body": "Radiation protection principle: keep exposures as low as reasonably achievable while accomplishing the clinical purpose.",
    "category": "Radiation Protection"
  },
  {
    "title": "Justification",
    "body": "Principle that an imaging exposure should provide more expected benefit than harm.",
    "category": "Radiation Protection"
  },
  {
    "title": "Optimization",
    "body": "Adjustment of imaging technique to obtain necessary diagnostic information with appropriate radiation exposure.",
    "category": "Radiation Protection"
  },
  {
    "title": "Time-distance-shielding",
    "body": "Core occupational radiation-protection strategy: minimize time, maximize distance, and use appropriate shielding.",
    "category": "Radiation Protection"
  },
  {
    "title": "Dosimeter",
    "body": "Device used to monitor occupational radiation exposure.",
    "category": "Radiation Protection"
  },
  {
    "title": "Primary barrier",
    "body": "Protective barrier designed to intercept the useful primary x-ray beam.",
    "category": "Radiation Protection"
  },
  {
    "title": "Secondary barrier",
    "body": "Protective barrier designed mainly for scatter and leakage radiation.",
    "category": "Radiation Protection"
  },
  {
    "title": "Leakage radiation",
    "body": "Radiation escaping through the x-ray tube housing other than through the useful beam port.",
    "category": "Radiation Protection"
  },
  {
    "title": "Controlled area",
    "body": "Area where occupational radiation exposure is managed under specific safety controls.",
    "category": "Radiation Protection"
  },
  {
    "title": "Pregnancy screening",
    "body": "Process of determining pregnancy possibility when relevant to imaging decisions and facility policy.",
    "category": "Patient Care"
  },
  {
    "title": "Repeat analysis",
    "body": "Quality-improvement review of repeated or rejected radiographic images and their causes.",
    "category": "Quality Assurance"
  },
  {
    "title": "Quality assurance",
    "body": "Planned system of activities intended to ensure consistent, appropriate imaging performance and patient care.",
    "category": "Quality Assurance"
  },
  {
    "title": "Quality control",
    "body": "Operational techniques and tests used to monitor and maintain imaging equipment and image quality.",
    "category": "Quality Assurance"
  },
  {
    "title": "Calibration",
    "body": "Adjustment or verification of equipment performance against a known standard.",
    "category": "Quality Assurance"
  },
  {
    "title": "Reject analysis",
    "body": "Evaluation of rejected images to identify trends, causes, and opportunities for improvement.",
    "category": "Quality Assurance"
  },
  {
    "title": "Sensitivity",
    "body": "Ability of a test to correctly identify patients who have a condition.",
    "category": "Clinical Concepts"
  },
  {
    "title": "Specificity",
    "body": "Ability of a test to correctly identify patients who do not have a condition.",
    "category": "Clinical Concepts"
  },
  {
    "title": "Incidental finding",
    "body": "Unexpected abnormality discovered on imaging that is unrelated to the original reason for the exam.",
    "category": "Clinical Concepts"
  },
  {
    "title": "Acute",
    "body": "Sudden onset or short duration.",
    "category": "Clinical Concepts"
  },
  {
    "title": "Chronic",
    "body": "Persistent or long-standing.",
    "category": "Clinical Concepts"
  },
  {
    "title": "Benign",
    "body": "Not malignant; generally not invasive or metastatic.",
    "category": "Clinical Concepts"
  },
  {
    "title": "Malignant",
    "body": "Cancerous; capable of invasion and potentially metastasis.",
    "category": "Clinical Concepts"
  },
  {
    "title": "Lesion",
    "body": "Localized area of abnormal tissue or structural change.",
    "category": "Clinical Concepts"
  },
  {
    "title": "Mass",
    "body": "Space-occupying lesion or abnormal collection of tissue.",
    "category": "Clinical Concepts"
  },
  {
    "title": "Nodule",
    "body": "Small, rounded lesion; exact size conventions vary by organ and context.",
    "category": "Clinical Concepts"
  },
  {
    "title": "Opacity",
    "body": "Area that appears relatively whiter or more attenuating on an x-ray or CT image.",
    "category": "Image Appearance"
  },
  {
    "title": "Lucency",
    "body": "Area that appears relatively darker or less attenuating on an x-ray image.",
    "category": "Image Appearance"
  },
  {
    "title": "Consolidation",
    "body": "Replacement of air in lung alveoli by fluid, cells, or other material, producing increased pulmonary opacity.",
    "category": "Chest Imaging"
  },
  {
    "title": "Atelectasis",
    "body": "Partial or complete collapse or loss of volume of lung tissue.",
    "category": "Chest Imaging"
  },
  {
    "title": "Pleural effusion",
    "body": "Abnormal fluid collection in the pleural space.",
    "category": "Chest Imaging"
  },
  {
    "title": "Pneumothorax",
    "body": "Air in the pleural space that can cause partial or complete lung collapse.",
    "category": "Chest Imaging"
  },
  {
    "title": "Cardiomegaly",
    "body": "Enlargement of the cardiac silhouette; interpretation depends on projection and technique.",
    "category": "Chest Imaging"
  },
  {
    "title": "Edema",
    "body": "Abnormal accumulation of fluid in tissues.",
    "category": "Clinical Concepts"
  },
  {
    "title": "Hemorrhage",
    "body": "Bleeding or accumulation of blood outside normal vascular channels.",
    "category": "Clinical Concepts"
  },
  {
    "title": "Fracture",
    "body": "Break or disruption in the continuity of bone.",
    "category": "Musculoskeletal"
  },
  {
    "title": "Dislocation",
    "body": "Complete loss of normal alignment between joint surfaces.",
    "category": "Musculoskeletal"
  },
  {
    "title": "Subluxation",
    "body": "Partial loss of normal alignment between joint surfaces.",
    "category": "Musculoskeletal"
  },
  {
    "title": "Osteopenia",
    "body": "Reduced bone mineral density relative to normal.",
    "category": "Musculoskeletal"
  },
  {
    "title": "Sclerosis",
    "body": "Abnormal increase in tissue density; in bone, increased radiopacity.",
    "category": "Musculoskeletal"
  },
  {
    "title": "Lytic lesion",
    "body": "Area of bone destruction that appears relatively radiolucent.",
    "category": "Musculoskeletal"
  },
  {
    "title": "Radiography",
    "body": "Production of static diagnostic images using x-rays.",
    "category": "Modalities"
  },
  {
    "title": "Fluoroscopy",
    "body": "Real-time or near-real-time x-ray imaging used to observe motion or guide procedures.",
    "category": "Modalities"
  },
  {
    "title": "Computed tomography",
    "body": "Cross-sectional imaging using rotating x-ray acquisition and computer reconstruction.",
    "category": "Modalities"
  },
  {
    "title": "Magnetic resonance imaging",
    "body": "Imaging using strong magnetic fields, radiofrequency energy, and signal processing rather than ionizing radiation.",
    "category": "Modalities"
  },
  {
    "title": "Ultrasound",
    "body": "Imaging using high-frequency sound waves and returning echoes.",
    "category": "Modalities"
  },
  {
    "title": "Nuclear medicine",
    "body": "Imaging or therapy using administered radioactive materials to evaluate physiology or treat disease.",
    "category": "Modalities"
  },
  {
    "title": "PET",
    "body": "Nuclear medicine imaging that detects pairs of photons produced after positron annihilation to map tracer distribution.",
    "category": "Nuclear Medicine"
  },
  {
    "title": "SPECT",
    "body": "Nuclear medicine technique using rotating gamma-camera acquisition to reconstruct tomographic tracer distribution.",
    "category": "Nuclear Medicine"
  },
  {
    "title": "Radiopharmaceutical",
    "body": "Radioactive compound administered for diagnostic imaging or therapy.",
    "category": "Nuclear Medicine"
  },
  {
    "title": "Gamma camera",
    "body": "Detector system used in planar nuclear medicine and SPECT to image gamma-emitting radiopharmaceuticals.",
    "category": "Nuclear Medicine"
  },
  {
    "title": "Half-life",
    "body": "Time required for the activity or number of radioactive nuclei in a sample to decrease to one-half.",
    "category": "Nuclear Medicine"
  },
  {
    "title": "Activity",
    "body": "Rate of radioactive decay, measured in becquerels or curies.",
    "category": "Nuclear Medicine"
  },
  {
    "title": "Uptake",
    "body": "Accumulation of a radiopharmaceutical in tissue or an organ.",
    "category": "Nuclear Medicine"
  },
  {
    "title": "Hot spot",
    "body": "Area of relatively increased radiotracer uptake.",
    "category": "Nuclear Medicine"
  },
  {
    "title": "Cold spot",
    "body": "Area of relatively decreased radiotracer uptake.",
    "category": "Nuclear Medicine"
  }
];

const abbreviations = [
  {
    "title": "AAPM",
    "body": "American Association of Physicists in Medicine",
    "category": "Organizations"
  },
  {
    "title": "ABG",
    "body": "Arterial blood gas",
    "category": "Patient Care"
  },
  {
    "title": "AC",
    "body": "Alternating current",
    "category": "Physics"
  },
  {
    "title": "ACR",
    "body": "American College of Radiology",
    "category": "Organizations"
  },
  {
    "title": "ADC",
    "body": "Apparent diffusion coefficient",
    "category": "MRI"
  },
  {
    "title": "AEC",
    "body": "Automatic exposure control",
    "category": "Radiography"
  },
  {
    "title": "AI",
    "body": "Artificial intelligence",
    "category": "Informatics"
  },
  {
    "title": "ALARA",
    "body": "As low as reasonably achievable",
    "category": "Radiation Protection"
  },
  {
    "title": "AP",
    "body": "Anteroposterior",
    "category": "Positioning"
  },
  {
    "title": "AP Axial",
    "body": "Anteroposterior axial projection",
    "category": "Positioning"
  },
  {
    "title": "AP OB",
    "body": "Anteroposterior oblique",
    "category": "Positioning"
  },
  {
    "title": "APN",
    "body": "Apnea",
    "category": "Patient Care"
  },
  {
    "title": "ARRT",
    "body": "American Registry of Radiologic Technologists",
    "category": "Organizations"
  },
  {
    "title": "ASIS",
    "body": "Anterior superior iliac spine",
    "category": "Anatomy"
  },
  {
    "title": "ASRT",
    "body": "American Society of Radiologic Technologists",
    "category": "Organizations"
  },
  {
    "title": "BID",
    "body": "Twice daily",
    "category": "Patient Care"
  },
  {
    "title": "BMD",
    "body": "Bone mineral density",
    "category": "Bone Densitometry"
  },
  {
    "title": "BMI",
    "body": "Body mass index",
    "category": "Patient Care"
  },
  {
    "title": "BP",
    "body": "Blood pressure",
    "category": "Patient Care"
  },
  {
    "title": "BUN",
    "body": "Blood urea nitrogen",
    "category": "Laboratory"
  },
  {
    "title": "C-arm",
    "body": "Mobile fluoroscopic x-ray system with a C-shaped gantry",
    "category": "Equipment"
  },
  {
    "title": "CAD",
    "body": "Computer-aided detection/diagnosis, depending on context",
    "category": "Informatics"
  },
  {
    "title": "CBCT",
    "body": "Cone-beam computed tomography",
    "category": "CT"
  },
  {
    "title": "CC",
    "body": "Craniocaudal",
    "category": "Mammography"
  },
  {
    "title": "CCK",
    "body": "Cholecystokinin",
    "category": "Nuclear Medicine"
  },
  {
    "title": "CCTA",
    "body": "Coronary computed tomography angiography",
    "category": "CT"
  },
  {
    "title": "CCT",
    "body": "Central ray / central-ray terminology varies by program; use CR when possible",
    "category": "Positioning"
  },
  {
    "title": "C-spine",
    "body": "Cervical spine",
    "category": "Anatomy"
  },
  {
    "title": "CXR",
    "body": "Chest x-ray / chest radiograph",
    "category": "Radiography"
  },
  {
    "title": "CT",
    "body": "Computed tomography",
    "category": "Modalities"
  },
  {
    "title": "CTA",
    "body": "Computed tomography angiography",
    "category": "CT"
  },
  {
    "title": "CTDI",
    "body": "Computed tomography dose index",
    "category": "CT Dose"
  },
  {
    "title": "CTDIvol",
    "body": "Volume computed tomography dose index",
    "category": "CT Dose"
  },
  {
    "title": "CTV",
    "body": "CT venography or clinical target volume, depending on context",
    "category": "CT/Radiation Therapy"
  },
  {
    "title": "CR",
    "body": "Central ray; also computed radiography depending on context",
    "category": "Radiography"
  },
  {
    "title": "CR system",
    "body": "Computed radiography system",
    "category": "Digital Imaging"
  },
  {
    "title": "CSF",
    "body": "Cerebrospinal fluid",
    "category": "Anatomy"
  },
  {
    "title": "DICOM",
    "body": "Digital Imaging and Communications in Medicine",
    "category": "Informatics"
  },
  {
    "title": "DLP",
    "body": "Dose-length product",
    "category": "CT Dose"
  },
  {
    "title": "DNR",
    "body": "Do not resuscitate",
    "category": "Patient Care"
  },
  {
    "title": "DR",
    "body": "Digital radiography",
    "category": "Digital Imaging"
  },
  {
    "title": "DRL",
    "body": "Diagnostic reference level",
    "category": "Radiation Protection"
  },
  {
    "title": "DVT",
    "body": "Deep vein thrombosis",
    "category": "Clinical"
  },
  {
    "title": "DXA",
    "body": "Dual-energy x-ray absorptiometry",
    "category": "Bone Densitometry"
  },
  {
    "title": "DXR",
    "body": "Diagnostic x-ray / radiography, context dependent",
    "category": "Radiography"
  },
  {
    "title": "ED",
    "body": "Emergency department",
    "category": "Clinical"
  },
  {
    "title": "EF",
    "body": "Ejection fraction",
    "category": "Cardiac/Nuclear Medicine"
  },
  {
    "title": "EI",
    "body": "Exposure indicator/index",
    "category": "Digital Imaging"
  },
  {
    "title": "ER",
    "body": "Emergency room",
    "category": "Clinical"
  },
  {
    "title": "ERCP",
    "body": "Endoscopic retrograde cholangiopancreatography",
    "category": "Fluoroscopy"
  },
  {
    "title": "ESR",
    "body": "Erythrocyte sedimentation rate",
    "category": "Laboratory"
  },
  {
    "title": "ETT",
    "body": "Endotracheal tube",
    "category": "Lines/Tubes"
  },
  {
    "title": "FAD",
    "body": "Focal-spot-to-axis distance",
    "category": "Geometry"
  },
  {
    "title": "FFD",
    "body": "Focus-to-film distance; older term similar to SID",
    "category": "Geometry"
  },
  {
    "title": "FLAIR",
    "body": "Fluid-attenuated inversion recovery",
    "category": "MRI"
  },
  {
    "title": "FOV",
    "body": "Field of view",
    "category": "Imaging"
  },
  {
    "title": "fps",
    "body": "Frames per second",
    "category": "Fluoroscopy"
  },
  {
    "title": "FR",
    "body": "French catheter size",
    "category": "Interventional"
  },
  {
    "title": "GB",
    "body": "Gallbladder",
    "category": "Anatomy"
  },
  {
    "title": "Gd",
    "body": "Gadolinium",
    "category": "MRI"
  },
  {
    "title": "GFR",
    "body": "Glomerular filtration rate",
    "category": "Laboratory"
  },
  {
    "title": "GI",
    "body": "Gastrointestinal",
    "category": "Anatomy"
  },
  {
    "title": "GRE",
    "body": "Gradient recalled echo / gradient echo",
    "category": "MRI"
  },
  {
    "title": "H&P",
    "body": "History and physical",
    "category": "Patient Care"
  },
  {
    "title": "HIS",
    "body": "Hospital information system",
    "category": "Informatics"
  },
  {
    "title": "HU",
    "body": "Hounsfield unit",
    "category": "CT"
  },
  {
    "title": "ICU",
    "body": "Intensive care unit",
    "category": "Clinical"
  },
  {
    "title": "ID",
    "body": "Identification or inner diameter, depending on context",
    "category": "General"
  },
  {
    "title": "IM",
    "body": "Intramuscular",
    "category": "Medication"
  },
  {
    "title": "INR",
    "body": "International normalized ratio",
    "category": "Laboratory"
  },
  {
    "title": "IR",
    "body": "Image receptor; also interventional radiology depending on context",
    "category": "Radiography/Interventional"
  },
  {
    "title": "IV",
    "body": "Intravenous",
    "category": "Patient Care"
  },
  {
    "title": "IVC",
    "body": "Inferior vena cava",
    "category": "Anatomy"
  },
  {
    "title": "IVP",
    "body": "Intravenous pyelogram / intravenous urography",
    "category": "Fluoroscopy"
  },
  {
    "title": "KUB",
    "body": "Kidneys, ureters, bladder",
    "category": "Radiography"
  },
  {
    "title": "kV",
    "body": "Kilovolt",
    "category": "Physics"
  },
  {
    "title": "kVp",
    "body": "Kilovolt peak",
    "category": "Exposure Factors"
  },
  {
    "title": "LA",
    "body": "Left atrium",
    "category": "Anatomy"
  },
  {
    "title": "LAO",
    "body": "Left anterior oblique",
    "category": "Positioning"
  },
  {
    "title": "LAT",
    "body": "Lateral",
    "category": "Positioning"
  },
  {
    "title": "L-spine",
    "body": "Lumbar spine",
    "category": "Anatomy"
  },
  {
    "title": "LMP",
    "body": "Last menstrual period",
    "category": "Patient Care"
  },
  {
    "title": "LLD",
    "body": "Left lateral decubitus",
    "category": "Positioning"
  },
  {
    "title": "LLQ",
    "body": "Left lower quadrant",
    "category": "Anatomy"
  },
  {
    "title": "LPO",
    "body": "Left posterior oblique",
    "category": "Positioning"
  },
  {
    "title": "LUQ",
    "body": "Left upper quadrant",
    "category": "Anatomy"
  },
  {
    "title": "LV",
    "body": "Left ventricle",
    "category": "Anatomy"
  },
  {
    "title": "mA",
    "body": "Milliampere",
    "category": "Exposure Factors"
  },
  {
    "title": "mAs",
    "body": "Milliampere-second",
    "category": "Exposure Factors"
  },
  {
    "title": "MCP",
    "body": "Metacarpophalangeal",
    "category": "Anatomy"
  },
  {
    "title": "MIP",
    "body": "Maximum intensity projection",
    "category": "CT/MRI"
  },
  {
    "title": "MLO",
    "body": "Mediolateral oblique",
    "category": "Mammography"
  },
  {
    "title": "MPR",
    "body": "Multiplanar reconstruction",
    "category": "CT/MRI"
  },
  {
    "title": "MR",
    "body": "Magnetic resonance",
    "category": "MRI"
  },
  {
    "title": "MRA",
    "body": "Magnetic resonance angiography",
    "category": "MRI"
  },
  {
    "title": "MRI",
    "body": "Magnetic resonance imaging",
    "category": "Modalities"
  },
  {
    "title": "MRCP",
    "body": "Magnetic resonance cholangiopancreatography",
    "category": "MRI"
  },
  {
    "title": "MRV",
    "body": "Magnetic resonance venography",
    "category": "MRI"
  },
  {
    "title": "MSP",
    "body": "Midsagittal plane",
    "category": "Positioning"
  },
  {
    "title": "NPO",
    "body": "Nothing by mouth",
    "category": "Patient Care"
  },
  {
    "title": "NM",
    "body": "Nuclear medicine",
    "category": "Modalities"
  },
  {
    "title": "O2",
    "body": "Oxygen",
    "category": "Patient Care"
  },
  {
    "title": "OB",
    "body": "Oblique",
    "category": "Positioning"
  },
  {
    "title": "OD",
    "body": "Outside diameter or right eye (oculus dexter), context dependent",
    "category": "General"
  },
  {
    "title": "OID",
    "body": "Object-to-image distance",
    "category": "Geometry"
  },
  {
    "title": "OR",
    "body": "Operating room",
    "category": "Clinical"
  },
  {
    "title": "PA",
    "body": "Posteroanterior",
    "category": "Positioning"
  },
  {
    "title": "PACS",
    "body": "Picture Archiving and Communication System",
    "category": "Informatics"
  },
  {
    "title": "PICC",
    "body": "Peripherally inserted central catheter",
    "category": "Lines/Tubes"
  },
  {
    "title": "PET",
    "body": "Positron emission tomography",
    "category": "Nuclear Medicine"
  },
  {
    "title": "PET/CT",
    "body": "Positron emission tomography/computed tomography",
    "category": "Nuclear Medicine"
  },
  {
    "title": "PICC line",
    "body": "Peripherally inserted central catheter",
    "category": "Lines/Tubes"
  },
  {
    "title": "PO",
    "body": "By mouth / orally",
    "category": "Medication"
  },
  {
    "title": "PRN",
    "body": "As needed",
    "category": "Medication"
  },
  {
    "title": "PSIS",
    "body": "Posterior superior iliac spine",
    "category": "Anatomy"
  },
  {
    "title": "PT",
    "body": "Prothrombin time or physical therapy, depending on context",
    "category": "Laboratory/Clinical"
  },
  {
    "title": "PTT",
    "body": "Partial thromboplastin time",
    "category": "Laboratory"
  },
  {
    "title": "QA",
    "body": "Quality assurance",
    "category": "Quality"
  },
  {
    "title": "QC",
    "body": "Quality control",
    "category": "Quality"
  },
  {
    "title": "QID",
    "body": "Four times daily",
    "category": "Medication"
  },
  {
    "title": "RA",
    "body": "Right atrium",
    "category": "Anatomy"
  },
  {
    "title": "RAO",
    "body": "Right anterior oblique",
    "category": "Positioning"
  },
  {
    "title": "RLD",
    "body": "Right lateral decubitus",
    "category": "Positioning"
  },
  {
    "title": "RLQ",
    "body": "Right lower quadrant",
    "category": "Anatomy"
  },
  {
    "title": "RPO",
    "body": "Right posterior oblique",
    "category": "Positioning"
  },
  {
    "title": "RSO",
    "body": "Radiation Safety Officer",
    "category": "Radiation Protection"
  },
  {
    "title": "RT",
    "body": "Radiologic technologist, radiation therapist, or respiratory therapy depending on context",
    "category": "Professional"
  },
  {
    "title": "RUL",
    "body": "Right upper lobe",
    "category": "Anatomy"
  },
  {
    "title": "RLL",
    "body": "Right lower lobe",
    "category": "Anatomy"
  },
  {
    "title": "RML",
    "body": "Right middle lobe",
    "category": "Anatomy"
  },
  {
    "title": "RUQ",
    "body": "Right upper quadrant",
    "category": "Anatomy"
  },
  {
    "title": "RV",
    "body": "Right ventricle",
    "category": "Anatomy"
  },
  {
    "title": "SNR",
    "body": "Signal-to-noise ratio",
    "category": "Image Quality"
  },
  {
    "title": "SOD",
    "body": "Source-to-object distance",
    "category": "Geometry"
  },
  {
    "title": "SID",
    "body": "Source-to-image distance",
    "category": "Geometry"
  },
  {
    "title": "SPECT",
    "body": "Single-photon emission computed tomography",
    "category": "Nuclear Medicine"
  },
  {
    "title": "SPECT/CT",
    "body": "Single-photon emission computed tomography/computed tomography",
    "category": "Nuclear Medicine"
  },
  {
    "title": "STIR",
    "body": "Short tau inversion recovery",
    "category": "MRI"
  },
  {
    "title": "T1",
    "body": "T1-weighted MRI / longitudinal relaxation context",
    "category": "MRI"
  },
  {
    "title": "T2",
    "body": "T2-weighted MRI / transverse relaxation context",
    "category": "MRI"
  },
  {
    "title": "T-spine",
    "body": "Thoracic spine",
    "category": "Anatomy"
  },
  {
    "title": "TE",
    "body": "Echo time",
    "category": "MRI"
  },
  {
    "title": "TIA",
    "body": "Transient ischemic attack",
    "category": "Clinical"
  },
  {
    "title": "TID",
    "body": "Three times daily",
    "category": "Medication"
  },
  {
    "title": "TLD",
    "body": "Thermoluminescent dosimeter",
    "category": "Radiation Protection"
  },
  {
    "title": "TR",
    "body": "Repetition time",
    "category": "MRI"
  },
  {
    "title": "US",
    "body": "Ultrasound",
    "category": "Modalities"
  },
  {
    "title": "USG",
    "body": "Ultrasonography",
    "category": "Ultrasound"
  },
  {
    "title": "VCUG",
    "body": "Voiding cystourethrogram",
    "category": "Fluoroscopy"
  },
  {
    "title": "V/Q",
    "body": "Ventilation/perfusion",
    "category": "Nuclear Medicine"
  },
  {
    "title": "WBC",
    "body": "White blood cell count",
    "category": "Laboratory"
  },
  {
    "title": "W/L",
    "body": "Window/level",
    "category": "CT"
  },
  {
    "title": "WW",
    "body": "Window width",
    "category": "CT"
  },
  {
    "title": "WL",
    "body": "Window level",
    "category": "CT"
  },
  {
    "title": "XR",
    "body": "X-ray / radiograph",
    "category": "Radiography"
  },
  {
    "title": "XRAY",
    "body": "X-ray",
    "category": "Radiography"
  },
  {
    "title": "3D",
    "body": "Three-dimensional",
    "category": "Imaging"
  },
  {
    "title": "2D",
    "body": "Two-dimensional",
    "category": "Imaging"
  },
  {
    "title": "4D",
    "body": "Four-dimensional / time-resolved 3D imaging, context dependent",
    "category": "Imaging"
  },
  {
    "title": "A/P",
    "body": "Anterior/posterior",
    "category": "Anatomy"
  },
  {
    "title": "A/P diameter",
    "body": "Anteroposterior diameter",
    "category": "Anatomy"
  },
  {
    "title": "AC joint",
    "body": "Acromioclavicular joint",
    "category": "Anatomy"
  },
  {
    "title": "ACL",
    "body": "Anterior cruciate ligament",
    "category": "Anatomy"
  },
  {
    "title": "C1-C7",
    "body": "Cervical vertebrae 1 through 7",
    "category": "Anatomy"
  },
  {
    "title": "T1-T12",
    "body": "Thoracic vertebrae 1 through 12",
    "category": "Anatomy"
  },
  {
    "title": "L1-L5",
    "body": "Lumbar vertebrae 1 through 5",
    "category": "Anatomy"
  },
  {
    "title": "SI joint",
    "body": "Sacroiliac joint",
    "category": "Anatomy"
  },
  {
    "title": "SC joint",
    "body": "Sternoclavicular joint",
    "category": "Anatomy"
  },
  {
    "title": "TMJ",
    "body": "Temporomandibular joint",
    "category": "Anatomy"
  },
  {
    "title": "MCP joint",
    "body": "Metacarpophalangeal joint",
    "category": "Anatomy"
  },
  {
    "title": "PIP",
    "body": "Proximal interphalangeal joint",
    "category": "Anatomy"
  },
  {
    "title": "DIP",
    "body": "Distal interphalangeal joint",
    "category": "Anatomy"
  },
  {
    "title": "MTP",
    "body": "Metatarsophalangeal joint",
    "category": "Anatomy"
  },
  {
    "title": "CVC",
    "body": "Central venous catheter",
    "category": "Lines/Tubes"
  },
  {
    "title": "NG",
    "body": "Nasogastric",
    "category": "Lines/Tubes"
  },
  {
    "title": "NGT",
    "body": "Nasogastric tube",
    "category": "Lines/Tubes"
  },
  {
    "title": "OGT",
    "body": "Orogastric tube",
    "category": "Lines/Tubes"
  },
  {
    "title": "PEG",
    "body": "Percutaneous endoscopic gastrostomy",
    "category": "Lines/Tubes"
  },
  {
    "title": "SVC",
    "body": "Superior vena cava",
    "category": "Anatomy"
  },
  {
    "title": "ET",
    "body": "Endotracheal",
    "category": "Lines/Tubes"
  },
  {
    "title": "CPR",
    "body": "Cardiopulmonary resuscitation",
    "category": "Patient Care"
  },
  {
    "title": "AED",
    "body": "Automated external defibrillator",
    "category": "Patient Care"
  },
  {
    "title": "SpO2",
    "body": "Peripheral oxygen saturation",
    "category": "Patient Care"
  },
  {
    "title": "HR",
    "body": "Heart rate",
    "category": "Patient Care"
  },
  {
    "title": "RR",
    "body": "Respiratory rate",
    "category": "Patient Care"
  },
  {
    "title": "LOC",
    "body": "Level of consciousness",
    "category": "Patient Care"
  },
  {
    "title": "GCS",
    "body": "Glasgow Coma Scale",
    "category": "Patient Care"
  },
  {
    "title": "PPE",
    "body": "Personal protective equipment",
    "category": "Patient Care"
  },
  {
    "title": "SDS",
    "body": "Safety Data Sheet",
    "category": "Safety"
  },
  {
    "title": "OSHA",
    "body": "Occupational Safety and Health Administration",
    "category": "Safety"
  },
  {
    "title": "HIPAA",
    "body": "Health Insurance Portability and Accountability Act",
    "category": "Professional"
  },
  {
    "title": "PHI",
    "body": "Protected health information",
    "category": "Professional"
  },
  {
    "title": "eGFR",
    "body": "Estimated glomerular filtration rate",
    "category": "Laboratory"
  },
  {
    "title": "Hgb",
    "body": "Hemoglobin",
    "category": "Laboratory"
  },
  {
    "title": "Hct",
    "body": "Hematocrit",
    "category": "Laboratory"
  },
  {
    "title": "Plt",
    "body": "Platelets",
    "category": "Laboratory"
  },
  {
    "title": "Na",
    "body": "Sodium",
    "category": "Laboratory"
  },
  {
    "title": "K",
    "body": "Potassium",
    "category": "Laboratory"
  },
  {
    "title": "NKA",
    "body": "No known allergies",
    "category": "Patient Care"
  },
  {
    "title": "NKDA",
    "body": "No known drug allergies",
    "category": "Patient Care"
  },
  {
    "title": "DOB",
    "body": "Date of birth",
    "category": "Patient Identification"
  },
  {
    "title": "MRN",
    "body": "Medical record number",
    "category": "Patient Identification"
  },
  {
    "title": "Hx",
    "body": "History",
    "category": "Clinical"
  },
  {
    "title": "Dx",
    "body": "Diagnosis",
    "category": "Clinical"
  },
  {
    "title": "Tx",
    "body": "Treatment",
    "category": "Clinical"
  },
  {
    "title": "Fx",
    "body": "Fracture",
    "category": "Clinical"
  },
  {
    "title": "Sx",
    "body": "Symptoms or surgery, depending on context",
    "category": "Clinical"
  },
  {
    "title": "Rx",
    "body": "Prescription/treatment",
    "category": "Clinical"
  },
  {
    "title": "r/o",
    "body": "Rule out",
    "category": "Clinical"
  },
  {
    "title": "s/p",
    "body": "Status post",
    "category": "Clinical"
  },
  {
    "title": "w/",
    "body": "With",
    "category": "General"
  },
  {
    "title": "w/o",
    "body": "Without",
    "category": "General"
  },
  {
    "title": "c/o",
    "body": "Complains of",
    "category": "Clinical"
  },
  {
    "title": "STAT",
    "body": "Immediately / urgently",
    "category": "Clinical"
  },
  {
    "title": "AP portable",
    "body": "Portable anteroposterior projection",
    "category": "Positioning"
  },
  {
    "title": "PA erect",
    "body": "Posteroanterior projection performed upright",
    "category": "Positioning"
  },
  {
    "title": "LPO/RAO",
    "body": "Posterior/anterior oblique positioning pair used for certain exams",
    "category": "Positioning"
  },
  {
    "title": "SID 40",
    "body": "Common shorthand for a 40-inch source-to-image distance",
    "category": "Geometry"
  },
  {
    "title": "SID 72",
    "body": "Common shorthand for a 72-inch source-to-image distance",
    "category": "Geometry"
  },
  {
    "title": "EI target",
    "body": "Target exposure indicator for a digital detector/system",
    "category": "Digital Imaging"
  },
  {
    "title": "DI",
    "body": "Deviation index",
    "category": "Digital Imaging"
  },
  {
    "title": "LUT",
    "body": "Lookup table",
    "category": "Digital Imaging"
  },
  {
    "title": "DQE",
    "body": "Detective quantum efficiency",
    "category": "Image Quality"
  },
  {
    "title": "MTF",
    "body": "Modulation transfer function",
    "category": "Image Quality"
  },
  {
    "title": "CNR",
    "body": "Contrast-to-noise ratio",
    "category": "Image Quality"
  },
  {
    "title": "lp/mm",
    "body": "Line pairs per millimeter",
    "category": "Image Quality"
  },
  {
    "title": "PBL",
    "body": "Positive beam limitation",
    "category": "Equipment"
  },
  {
    "title": "HVL",
    "body": "Half-value layer",
    "category": "Physics"
  },
  {
    "title": "LET",
    "body": "Linear energy transfer",
    "category": "Radiation Biology"
  },
  {
    "title": "RBE",
    "body": "Relative biological effectiveness",
    "category": "Radiation Biology"
  },
  {
    "title": "Gy",
    "body": "Gray",
    "category": "Radiation Units"
  },
  {
    "title": "mGy",
    "body": "Milligray",
    "category": "Radiation Units"
  },
  {
    "title": "Sv",
    "body": "Sievert",
    "category": "Radiation Units"
  },
  {
    "title": "mSv",
    "body": "Millisievert",
    "category": "Radiation Units"
  },
  {
    "title": "Bq",
    "body": "Becquerel",
    "category": "Nuclear Medicine"
  },
  {
    "title": "Ci",
    "body": "Curie",
    "category": "Nuclear Medicine"
  },
  {
    "title": "mCi",
    "body": "Millicurie",
    "category": "Nuclear Medicine"
  },
  {
    "title": "MBq",
    "body": "Megabecquerel",
    "category": "Nuclear Medicine"
  },
  {
    "title": "DAP",
    "body": "Dose-area product",
    "category": "Radiation Dose"
  },
  {
    "title": "KAP",
    "body": "Kerma-area product",
    "category": "Radiation Dose"
  },
  {
    "title": "AK",
    "body": "Air kerma",
    "category": "Radiation Dose"
  },
  {
    "title": "ESD",
    "body": "Entrance surface dose",
    "category": "Radiation Dose"
  },
  {
    "title": "ESE",
    "body": "Entrance skin exposure",
    "category": "Radiation Dose"
  },
  {
    "title": "R",
    "body": "Roentgen",
    "category": "Radiation Units"
  },
  {
    "title": "RF",
    "body": "Radiofrequency",
    "category": "MRI"
  },
  {
    "title": "SAR",
    "body": "Specific absorption rate",
    "category": "MRI Safety"
  },
  {
    "title": "B0",
    "body": "Main static magnetic field",
    "category": "MRI"
  },
  {
    "title": "B1",
    "body": "Radiofrequency magnetic field",
    "category": "MRI"
  },
  {
    "title": "DWI",
    "body": "Diffusion-weighted imaging",
    "category": "MRI"
  },
  {
    "title": "SWI",
    "body": "Susceptibility-weighted imaging",
    "category": "MRI"
  },
  {
    "title": "PD",
    "body": "Proton density",
    "category": "MRI"
  },
  {
    "title": "FSE",
    "body": "Fast spin echo",
    "category": "MRI"
  },
  {
    "title": "SE",
    "body": "Spin echo",
    "category": "MRI"
  },
  {
    "title": "TOF",
    "body": "Time of flight",
    "category": "MRI"
  },
  {
    "title": "MinIP",
    "body": "Minimum intensity projection",
    "category": "Post-processing"
  },
  {
    "title": "VR",
    "body": "Volume rendering",
    "category": "Post-processing"
  },
  {
    "title": "ROI",
    "body": "Region of interest",
    "category": "Digital Imaging"
  },
  {
    "title": "CTDIw",
    "body": "Weighted CT dose index",
    "category": "CT Dose"
  },
  {
    "title": "SSDE",
    "body": "Size-specific dose estimate",
    "category": "CT Dose"
  },
  {
    "title": "FWHM",
    "body": "Full width at half maximum",
    "category": "Image Quality"
  },
  {
    "title": "DFOV",
    "body": "Display field of view",
    "category": "CT"
  },
  {
    "title": "SFOV",
    "body": "Scan field of view",
    "category": "CT"
  },
  {
    "title": "kV CT",
    "body": "Tube potential used in CT",
    "category": "CT"
  },
  {
    "title": "mA CT",
    "body": "Tube current used in CT",
    "category": "CT"
  },
  {
    "title": "ATCM",
    "body": "Automatic tube current modulation",
    "category": "CT"
  },
  {
    "title": "AEC CT",
    "body": "Automatic exposure control in CT",
    "category": "CT"
  },
  {
    "title": "HU water",
    "body": "CT number of water, approximately 0 HU",
    "category": "CT"
  },
  {
    "title": "HU air",
    "body": "CT number of air, approximately -1000 HU",
    "category": "CT"
  },
  {
    "title": "MHz",
    "body": "Megahertz",
    "category": "Ultrasound"
  },
  {
    "title": "PRF",
    "body": "Pulse repetition frequency",
    "category": "Ultrasound"
  },
  {
    "title": "TGC",
    "body": "Time gain compensation",
    "category": "Ultrasound"
  },
  {
    "title": "B-mode",
    "body": "Brightness mode ultrasound",
    "category": "Ultrasound"
  },
  {
    "title": "M-mode",
    "body": "Motion mode ultrasound",
    "category": "Ultrasound"
  },
  {
    "title": "CW Doppler",
    "body": "Continuous-wave Doppler",
    "category": "Ultrasound"
  },
  {
    "title": "PW Doppler",
    "body": "Pulsed-wave Doppler",
    "category": "Ultrasound"
  },
  {
    "title": "FDG",
    "body": "Fluorodeoxyglucose",
    "category": "Nuclear Medicine"
  },
  {
    "title": "Tc-99m",
    "body": "Technetium-99m",
    "category": "Nuclear Medicine"
  },
  {
    "title": "I-123",
    "body": "Iodine-123",
    "category": "Nuclear Medicine"
  },
  {
    "title": "I-131",
    "body": "Iodine-131",
    "category": "Nuclear Medicine"
  },
  {
    "title": "Ga-67",
    "body": "Gallium-67",
    "category": "Nuclear Medicine"
  },
  {
    "title": "F-18",
    "body": "Fluorine-18",
    "category": "Nuclear Medicine"
  },
  {
    "title": "ROI NM",
    "body": "Region of interest",
    "category": "Nuclear Medicine"
  },
  {
    "title": "MUGA",
    "body": "Multigated acquisition scan",
    "category": "Nuclear Medicine"
  },
  {
    "title": "HIDA",
    "body": "Hepatobiliary iminodiacetic acid scan",
    "category": "Nuclear Medicine"
  },
  {
    "title": "DMSA",
    "body": "Dimercaptosuccinic acid renal imaging agent",
    "category": "Nuclear Medicine"
  },
  {
    "title": "MAG3",
    "body": "Mercaptoacetyltriglycine renal imaging agent",
    "category": "Nuclear Medicine"
  },
  {
    "title": "DEXA",
    "body": "Common alternate spelling for DXA; dual-energy x-ray absorptiometry",
    "category": "Bone Densitometry"
  },
  {
    "title": "T-score",
    "body": "Bone density comparison with a young-adult reference population",
    "category": "Bone Densitometry"
  },
  {
    "title": "Z-score",
    "body": "Bone density comparison with an age/sex-matched reference population",
    "category": "Bone Densitometry"
  },
  {
    "title": "BI-RADS",
    "body": "Breast Imaging Reporting and Data System",
    "category": "Mammography"
  },
  {
    "title": "CC view",
    "body": "Craniocaudal mammographic view",
    "category": "Mammography"
  },
  {
    "title": "MLO view",
    "body": "Mediolateral oblique mammographic view",
    "category": "Mammography"
  },
  {
    "title": "MQSA",
    "body": "Mammography Quality Standards Act",
    "category": "Mammography"
  },
  {
    "title": "PACS/RIS",
    "body": "Combined picture archiving and radiology information workflow",
    "category": "Informatics"
  },
  {
    "title": "HL7",
    "body": "Health Level Seven",
    "category": "Informatics"
  },
  {
    "title": "EHR",
    "body": "Electronic health record",
    "category": "Informatics"
  },
  {
    "title": "EMR",
    "body": "Electronic medical record",
    "category": "Informatics"
  },
  {
    "title": "MWL",
    "body": "Modality worklist",
    "category": "Informatics"
  },
  {
    "title": "UID",
    "body": "Unique identifier",
    "category": "DICOM"
  },
  {
    "title": "MPPS",
    "body": "Modality Performed Procedure Step",
    "category": "DICOM"
  },
  {
    "title": "NRC",
    "body": "U.S. Nuclear Regulatory Commission",
    "category": "Organizations"
  },
  {
    "title": "IAEA",
    "body": "International Atomic Energy Agency",
    "category": "Organizations"
  },
  {
    "title": "FDA",
    "body": "U.S. Food and Drug Administration",
    "category": "Organizations"
  },
  {
    "title": "CDC",
    "body": "Centers for Disease Control and Prevention",
    "category": "Organizations"
  },
  {
    "title": "WHO",
    "body": "World Health Organization",
    "category": "Organizations"
  },
  {
    "title": "SNMMI",
    "body": "Society of Nuclear Medicine and Molecular Imaging",
    "category": "Organizations"
  },
  {
    "title": "ARDMS",
    "body": "American Registry for Diagnostic Medical Sonography",
    "category": "Organizations"
  },
  {
    "title": "JRCERT",
    "body": "Joint Review Committee on Education in Radiologic Technology",
    "category": "Organizations"
  }
];

const articles = [
  {
    "title": "Medical X-ray Imaging",
    "source": "FDA",
    "category": "Radiography & Physics",
    "summary": "Overview of radiography, fluoroscopy and CT, including benefits, risks and radiation-protection principles.",
    "url": "https://www.fda.gov/radiation-emitting-products/medical-imaging/medical-x-ray-imaging",
    "tags": "x-ray radiation safety modalities"
  },
  {
    "title": "Radiography",
    "source": "FDA",
    "category": "Radiography & Physics",
    "summary": "Core explanation of how static x-ray images are produced, common uses and professional safety considerations.",
    "url": "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/radiography",
    "tags": "radiograph detector x-ray"
  },
  {
    "title": "Computed Tomography (CT)",
    "source": "FDA",
    "category": "CT",
    "summary": "Introduction to CT system operation, image acquisition, uses, optimization and dose considerations.",
    "url": "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/computed-tomography-ct",
    "tags": "ct slices dose scanner"
  },
  {
    "title": "What Is Computed Tomography?",
    "source": "FDA",
    "category": "CT",
    "summary": "Visual explanation of how conventional projection imaging differs from cross-sectional CT imaging.",
    "url": "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/what-computed-tomography",
    "tags": "ct reconstruction cross sectional"
  },
  {
    "title": "Fluoroscopy",
    "source": "FDA",
    "category": "Fluoroscopy",
    "summary": "Explains continuous x-ray imaging, common procedures, dose concerns and protection strategies.",
    "url": "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/fluoroscopy",
    "tags": "fluoro real time radiation"
  },
  {
    "title": "Mammography",
    "source": "FDA",
    "category": "Mammography",
    "summary": "Introduction to mammographic x-ray imaging, equipment, image quality and radiation considerations.",
    "url": "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/mammography",
    "tags": "breast mammogram mqsa"
  },
  {
    "title": "Medical Imaging",
    "source": "FDA",
    "category": "Modalities",
    "summary": "Gateway to FDA educational material on x-ray, CT, MRI, ultrasound and pediatric imaging.",
    "url": "https://www.fda.gov/radiation-emitting-products/radiation-emitting-products-and-procedures/medical-imaging",
    "tags": "modalities imaging"
  },
  {
    "title": "Pediatric X-ray Imaging",
    "source": "FDA",
    "category": "Radiation Protection",
    "summary": "Explains why pediatric technique optimization and appropriate imaging are important.",
    "url": "https://www.fda.gov/radiation-emitting-products/medical-imaging/pediatric-x-ray-imaging",
    "tags": "pediatric dose optimization"
  },
  {
    "title": "MRI (Magnetic Resonance Imaging)",
    "source": "FDA",
    "category": "MRI",
    "summary": "Overview of MRI technology and major safety issues involving magnetic and radiofrequency fields.",
    "url": "https://www.fda.gov/radiation-emitting-products/medical-imaging/mri-magnetic-resonance-imaging",
    "tags": "mri safety magnet"
  },
  {
    "title": "Ultrasound Imaging",
    "source": "FDA",
    "category": "Ultrasound",
    "summary": "Basic explanation of diagnostic ultrasound, transducers, uses and safety principles.",
    "url": "https://www.fda.gov/radiation-emitting-products/medical-imaging/ultrasound-imaging",
    "tags": "ultrasound sound transducer"
  },
  {
    "title": "Questions & Answers: Reducing Unnecessary Radiation Exposure",
    "source": "FDA",
    "category": "Radiation Protection",
    "summary": "Explains modality differences and the rationale for reducing unnecessary medical radiation exposure.",
    "url": "https://www.fda.gov/radiation-emitting-products/initiative-reduce-unnecessary-radiation-exposure-medical-imaging/questions-answers-initiative-reduce-unnecessary-radiation-exposure-medical-imaging",
    "tags": "dose justification optimization"
  },
  {
    "title": "Radiation Safety Performance Standard Q&A",
    "source": "FDA",
    "category": "Radiation Protection",
    "summary": "Practical background on diagnostic x-ray equipment and fluoroscopy safety requirements.",
    "url": "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/questions-and-answers-about-radiation-safety-performance-standard-diagnostic-x-ray-systems",
    "tags": "equipment safety fluoroscopy"
  },
  {
    "title": "Information for Industry: X-ray Imaging Devices",
    "source": "FDA",
    "category": "Quality Assurance",
    "summary": "Useful background on image-quality and dose-assessment tests used with x-ray imaging equipment.",
    "url": "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/information-industry-x-ray-imaging-devices",
    "tags": "quality control equipment tests"
  },
  {
    "title": "Radiation Protection of Patients",
    "source": "IAEA",
    "category": "Radiation Protection",
    "summary": "Major international learning hub covering patient protection in diagnostic radiology, CT, fluoroscopy and nuclear medicine.",
    "url": "https://www.iaea.org/resources/rpop",
    "tags": "radiation protection dose patient"
  },
  {
    "title": "Radiation Protection in Radiology",
    "source": "IAEA",
    "category": "Radiation Protection",
    "summary": "IAEA resources for applying radiation protection principles in diagnostic and interventional radiology.",
    "url": "https://www.iaea.org/resources/rpop/health-professionals/radiology",
    "tags": "radiology protection staff patient"
  },
  {
    "title": "Radiation Protection in CT",
    "source": "IAEA",
    "category": "CT",
    "summary": "CT-focused radiation-protection guidance for health professionals.",
    "url": "https://www.iaea.org/resources/rpop/health-professionals/radiology/computed-tomography",
    "tags": "ct dose optimization"
  },
  {
    "title": "Radiation Protection in Fluoroscopy",
    "source": "IAEA",
    "category": "Fluoroscopy",
    "summary": "Educational material on dose management during fluoroscopically guided procedures.",
    "url": "https://www.iaea.org/resources/rpop/health-professionals/interventional-procedures",
    "tags": "fluoroscopy interventional dose"
  },
  {
    "title": "Radiation Protection in Paediatric Radiology",
    "source": "IAEA",
    "category": "Radiation Protection",
    "summary": "Principles for adapting imaging and radiation protection to children.",
    "url": "https://www.iaea.org/resources/rpop/health-professionals/radiology/children",
    "tags": "pediatric radiology"
  },
  {
    "title": "Pregnancy and Radiation Protection",
    "source": "IAEA",
    "category": "Radiation Protection",
    "summary": "Guidance for understanding medical radiation exposure during pregnancy.",
    "url": "https://www.iaea.org/resources/rpop/health-professionals/radiology/pregnant-women",
    "tags": "pregnancy radiation"
  },
  {
    "title": "Radiation Protection in Nuclear Medicine",
    "source": "IAEA",
    "category": "Nuclear Medicine",
    "summary": "Patient and staff protection concepts for diagnostic and therapeutic nuclear medicine.",
    "url": "https://www.iaea.org/resources/rpop/health-professionals/nuclear-medicine",
    "tags": "nuclear medicine dose"
  },
  {
    "title": "ASRT Radiography Curriculum",
    "source": "ASRT",
    "category": "Professional & Exam Prep",
    "summary": "Official curriculum outline describing the common body of knowledge expected in entry-level radiography education.",
    "url": "https://www.asrt.org/educators/asrt-curricula/radiography",
    "tags": "curriculum student arrt"
  },
  {
    "title": "ASRT Radiography Study Guides",
    "source": "ASRT",
    "category": "Professional & Exam Prep",
    "summary": "Registry-review resource hub covering anatomy, physics, digital imaging, positioning and more.",
    "url": "https://www.asrt.org/students/study-guides/radiography",
    "tags": "registry study guide"
  },
  {
    "title": "ASRT Practice Standards",
    "source": "ASRT",
    "category": "Professional & Exam Prep",
    "summary": "Professional standards, scope concepts and glossary for medical imaging and radiation therapy.",
    "url": "https://www.asrt.org/main/standards-and-regulations/professional-practice/practice-standards-online",
    "tags": "practice standards scope"
  },
  {
    "title": "ASRT Professional Practice",
    "source": "ASRT",
    "category": "Professional & Exam Prep",
    "summary": "Hub for practice standards, position statements and professional guidance.",
    "url": "https://www.asrt.org/main/standards-and-regulations/professional-practice",
    "tags": "professional practice"
  },
  {
    "title": "ASRT Radcademy Glossary",
    "source": "ASRT",
    "category": "Terminology",
    "summary": "Beginner-friendly glossary for medical imaging and radiation therapy terminology.",
    "url": "https://www.asrt.org/radcademy/glossary",
    "tags": "glossary terminology"
  },
  {
    "title": "Seeing Patients From the Inside Out",
    "source": "ASRT",
    "category": "Modalities",
    "summary": "Introductory overview of radiologic technology and major medical imaging disciplines.",
    "url": "https://www.asrt.org/radcademy/seeing-patients-from-the-inside-out",
    "tags": "radiologic technology modalities"
  },
  {
    "title": "ARRT Radiography",
    "source": "ARRT",
    "category": "Professional & Exam Prep",
    "summary": "Official radiography credential page with requirements and exam-related resources.",
    "url": "https://www.arrt.org/pages/earn-arrt-credentials/credential-options/radiography",
    "tags": "arrt radiography registry"
  },
  {
    "title": "ARRT Exam Information",
    "source": "ARRT",
    "category": "Professional & Exam Prep",
    "summary": "Explains ARRT examination processes and candidate information.",
    "url": "https://www.arrt.org/pages/earn-arrt-credentials/initial-requirements/exam",
    "tags": "exam registry"
  },
  {
    "title": "ARRT Ethics Requirements",
    "source": "ARRT",
    "category": "Professional & Exam Prep",
    "summary": "Overview of ethics requirements for certification and registration.",
    "url": "https://www.arrt.org/pages/earn-arrt-credentials/initial-requirements/ethics",
    "tags": "ethics professional"
  },
  {
    "title": "ARRT Education Requirements",
    "source": "ARRT",
    "category": "Professional & Exam Prep",
    "summary": "Explains educational requirements associated with earning ARRT credentials.",
    "url": "https://www.arrt.org/pages/earn-arrt-credentials/initial-requirements/education-requirements-primary",
    "tags": "education requirements"
  },
  {
    "title": "Contrast Materials",
    "source": "RadiologyInfo",
    "category": "Contrast & Patient Care",
    "summary": "Explains iodine, barium, gadolinium and other contrast agents, including common safety considerations.",
    "url": "https://www.radiologyinfo.org/en/info/safety-contrast",
    "tags": "contrast iodine barium gadolinium"
  },
  {
    "title": "Radiation Dose in X-Ray and CT Exams",
    "source": "RadiologyInfo",
    "category": "Radiation Protection",
    "summary": "Patient-centered explanation of radiation dose and relative exposure from common imaging exams.",
    "url": "https://www.radiologyinfo.org/en/info/safety-xray",
    "tags": "dose xray ct"
  },
  {
    "title": "X-ray (Radiography) - Bone",
    "source": "RadiologyInfo",
    "category": "Radiography Procedures",
    "summary": "Explains routine bone radiography, preparation, equipment and what images demonstrate.",
    "url": "https://www.radiologyinfo.org/en/info/bonerad",
    "tags": "bone xray fracture"
  },
  {
    "title": "Chest X-ray",
    "source": "RadiologyInfo",
    "category": "Radiography Procedures",
    "summary": "Overview of chest radiography, common indications and what the exam evaluates.",
    "url": "https://www.radiologyinfo.org/en/info/chestrad",
    "tags": "chest xray lungs"
  },
  {
    "title": "Abdominal X-ray",
    "source": "RadiologyInfo",
    "category": "Radiography Procedures",
    "summary": "Introduction to abdominal radiography and common clinical uses.",
    "url": "https://www.radiologyinfo.org/en/info/abdominrad",
    "tags": "abdomen kub xray"
  },
  {
    "title": "CT of the Head",
    "source": "RadiologyInfo",
    "category": "CT",
    "summary": "Overview of head CT technique, indications and patient preparation.",
    "url": "https://www.radiologyinfo.org/en/info/headct",
    "tags": "head ct brain"
  },
  {
    "title": "CT of the Abdomen and Pelvis",
    "source": "RadiologyInfo",
    "category": "CT",
    "summary": "Explains abdominal/pelvic CT, contrast use and common indications.",
    "url": "https://www.radiologyinfo.org/en/info/abdominct",
    "tags": "abdomen pelvis ct"
  },
  {
    "title": "CT of the Chest",
    "source": "RadiologyInfo",
    "category": "CT",
    "summary": "Explains chest CT and the anatomy and disease processes it can evaluate.",
    "url": "https://www.radiologyinfo.org/en/info/chestct",
    "tags": "chest ct lungs"
  },
  {
    "title": "CT Angiography",
    "source": "RadiologyInfo",
    "category": "CT",
    "summary": "Introduction to CTA and contrast-enhanced vascular imaging.",
    "url": "https://www.radiologyinfo.org/en/info/angioct",
    "tags": "cta vessels contrast"
  },
  {
    "title": "CT Enterography",
    "source": "RadiologyInfo",
    "category": "CT",
    "summary": "Explains CT evaluation of the small bowel using specialized contrast preparation.",
    "url": "https://www.radiologyinfo.org/en/info/ctenterography",
    "tags": "ct bowel"
  },
  {
    "title": "Body MRI",
    "source": "RadiologyInfo",
    "category": "MRI",
    "summary": "Overview of MRI for abdominal, pelvic and other body structures.",
    "url": "https://www.radiologyinfo.org/en/info/bodymr",
    "tags": "mri body"
  },
  {
    "title": "Brain MRI",
    "source": "RadiologyInfo",
    "category": "MRI",
    "summary": "Explains MRI of the brain, common sequences/uses and preparation.",
    "url": "https://www.radiologyinfo.org/en/info/headmr",
    "tags": "brain mri"
  },
  {
    "title": "MR Angiography",
    "source": "RadiologyInfo",
    "category": "MRI",
    "summary": "Introduction to magnetic resonance angiography and vascular imaging.",
    "url": "https://www.radiologyinfo.org/en/info/angiomr",
    "tags": "mra vessels"
  },
  {
    "title": "MRCP",
    "source": "RadiologyInfo",
    "category": "MRI",
    "summary": "Explains magnetic resonance cholangiopancreatography for biliary and pancreatic ducts.",
    "url": "https://www.radiologyinfo.org/en/info/mrcp",
    "tags": "mrcp biliary"
  },
  {
    "title": "General Ultrasound",
    "source": "RadiologyInfo",
    "category": "Ultrasound",
    "summary": "Introduction to ultrasound equipment, image formation and common exams.",
    "url": "https://www.radiologyinfo.org/en/info/genus",
    "tags": "ultrasound basics"
  },
  {
    "title": "Abdominal Ultrasound",
    "source": "RadiologyInfo",
    "category": "Ultrasound",
    "summary": "Overview of abdominal sonography and the organs commonly evaluated.",
    "url": "https://www.radiologyinfo.org/en/info/abdominus",
    "tags": "abdomen ultrasound"
  },
  {
    "title": "Doppler Ultrasound",
    "source": "RadiologyInfo",
    "category": "Ultrasound",
    "summary": "Explains Doppler evaluation of blood flow and vascular structures.",
    "url": "https://www.radiologyinfo.org/en/info/doppler",
    "tags": "doppler flow"
  },
  {
    "title": "Obstetric Ultrasound",
    "source": "RadiologyInfo",
    "category": "Ultrasound",
    "summary": "Overview of ultrasound use during pregnancy.",
    "url": "https://www.radiologyinfo.org/en/info/obstetricus",
    "tags": "obstetric ultrasound"
  },
  {
    "title": "Pelvic Ultrasound",
    "source": "RadiologyInfo",
    "category": "Ultrasound",
    "summary": "Explains transabdominal and transvaginal pelvic ultrasound.",
    "url": "https://www.radiologyinfo.org/en/info/pelvus",
    "tags": "pelvis ultrasound"
  },
  {
    "title": "Upper GI Series",
    "source": "RadiologyInfo",
    "category": "Fluoroscopy",
    "summary": "Explains fluoroscopic evaluation of the upper gastrointestinal tract using contrast.",
    "url": "https://www.radiologyinfo.org/en/info/uppergi",
    "tags": "upper gi barium fluoroscopy"
  },
  {
    "title": "Lower GI Tract X-ray",
    "source": "RadiologyInfo",
    "category": "Fluoroscopy",
    "summary": "Overview of contrast enema fluoroscopy of the colon.",
    "url": "https://www.radiologyinfo.org/en/info/lowergi",
    "tags": "barium enema fluoroscopy"
  },
  {
    "title": "Hysterosalpingography",
    "source": "RadiologyInfo",
    "category": "Fluoroscopy",
    "summary": "Explains fluoroscopic evaluation of the uterus and fallopian tubes.",
    "url": "https://www.radiologyinfo.org/en/info/hysterosalp",
    "tags": "hsg fluoroscopy"
  },
  {
    "title": "Arthrography",
    "source": "RadiologyInfo",
    "category": "Fluoroscopy",
    "summary": "Introduction to contrast injection into a joint for fluoroscopic, CT or MR evaluation.",
    "url": "https://www.radiologyinfo.org/en/info/arthrog",
    "tags": "arthrogram joint contrast"
  },
  {
    "title": "Myelography",
    "source": "RadiologyInfo",
    "category": "Fluoroscopy",
    "summary": "Explains contrast evaluation of the spinal canal, commonly followed by CT.",
    "url": "https://www.radiologyinfo.org/en/info/myelography",
    "tags": "myelogram spine"
  },
  {
    "title": "Mammography",
    "source": "RadiologyInfo",
    "category": "Mammography",
    "summary": "Patient-centered overview of screening and diagnostic mammography.",
    "url": "https://www.radiologyinfo.org/en/info/mammo",
    "tags": "mammogram breast"
  },
  {
    "title": "Breast Tomosynthesis",
    "source": "RadiologyInfo",
    "category": "Mammography",
    "summary": "Explains 3D mammography/tomosynthesis and how it differs from standard mammography.",
    "url": "https://www.radiologyinfo.org/en/info/tomosynthesis",
    "tags": "breast tomosynthesis"
  },
  {
    "title": "Bone Density Scan (DXA)",
    "source": "RadiologyInfo",
    "category": "Bone Densitometry",
    "summary": "Explains DXA scanning and interpretation concepts used in osteoporosis assessment.",
    "url": "https://www.radiologyinfo.org/en/info/dexa",
    "tags": "dxa bone density"
  },
  {
    "title": "PET/CT",
    "source": "RadiologyInfo",
    "category": "Nuclear Medicine",
    "summary": "Overview of combined metabolic PET and anatomic CT imaging.",
    "url": "https://www.radiologyinfo.org/en/info/pet",
    "tags": "pet ct nuclear"
  },
  {
    "title": "Bone Scan",
    "source": "RadiologyInfo",
    "category": "Nuclear Medicine",
    "summary": "Explains radionuclide bone scanning and common indications.",
    "url": "https://www.radiologyinfo.org/en/info/bone-scan",
    "tags": "bone scan nuclear"
  },
  {
    "title": "Renal Scan",
    "source": "RadiologyInfo",
    "category": "Nuclear Medicine",
    "summary": "Introduction to nuclear medicine evaluation of kidney function and drainage.",
    "url": "https://www.radiologyinfo.org/en/info/renal",
    "tags": "renal nuclear"
  },
  {
    "title": "Thyroid Scan and Uptake",
    "source": "RadiologyInfo",
    "category": "Nuclear Medicine",
    "summary": "Explains thyroid scintigraphy and radioactive iodine uptake testing.",
    "url": "https://www.radiologyinfo.org/en/info/thyroid-scan-uptake",
    "tags": "thyroid nuclear"
  },
  {
    "title": "Hepatobiliary Nuclear Medicine",
    "source": "RadiologyInfo",
    "category": "Nuclear Medicine",
    "summary": "Overview of hepatobiliary imaging, commonly called a HIDA scan.",
    "url": "https://www.radiologyinfo.org/en/info/hepatobiliary",
    "tags": "hida gallbladder"
  },
  {
    "title": "Radiology Masterclass: Chest X-ray Tutorial",
    "source": "Radiology Masterclass",
    "category": "Image Interpretation",
    "summary": "Structured introduction to reading chest radiographs systematically.",
    "url": "https://www.radiologymasterclass.co.uk/tutorials/chest/chest_home_anatomy/chest_anatomy_start",
    "tags": "chest xray anatomy interpretation"
  },
  {
    "title": "Chest X-ray Quality",
    "source": "Radiology Masterclass",
    "category": "Image Interpretation",
    "summary": "Teaches technical assessment of chest radiographs before interpretation.",
    "url": "https://www.radiologymasterclass.co.uk/tutorials/chest/chest_quality/chest_xray_quality_start",
    "tags": "rotation inspiration exposure chest"
  },
  {
    "title": "Chest X-ray Anatomy",
    "source": "Radiology Masterclass",
    "category": "Image Interpretation",
    "summary": "Review of normal structures visible on chest radiographs.",
    "url": "https://www.radiologymasterclass.co.uk/tutorials/chest/chest_home_anatomy/chest_anatomy_page1",
    "tags": "normal chest anatomy"
  },
  {
    "title": "Chest X-ray ABCDE",
    "source": "Radiology Masterclass",
    "category": "Image Interpretation",
    "summary": "Systematic search-pattern concepts for chest radiograph review.",
    "url": "https://www.radiologymasterclass.co.uk/tutorials/chest/chest_system/chest_system_start",
    "tags": "abcde chest search pattern"
  },
  {
    "title": "Abdominal X-ray Tutorial",
    "source": "Radiology Masterclass",
    "category": "Image Interpretation",
    "summary": "Systematic introduction to abdominal radiograph interpretation.",
    "url": "https://www.radiologymasterclass.co.uk/tutorials/abdo/abdomen_x-ray/abdominal_xray_start",
    "tags": "abdomen xray"
  },
  {
    "title": "Trauma X-ray Tutorial",
    "source": "Radiology Masterclass",
    "category": "Image Interpretation",
    "summary": "Foundational approach to reviewing trauma radiographs and fractures.",
    "url": "https://www.radiologymasterclass.co.uk/tutorials/musculoskeletal/trauma/trauma_x-ray_start",
    "tags": "trauma fracture xray"
  },
  {
    "title": "CT Brain Tutorial",
    "source": "Radiology Masterclass",
    "category": "CT",
    "summary": "Beginner-friendly systematic approach to CT brain interpretation.",
    "url": "https://www.radiologymasterclass.co.uk/tutorials/ct/ct_brain_anatomy/ct_brain_anatomy_start",
    "tags": "ct brain anatomy"
  },
  {
    "title": "CT Brain Anatomy",
    "source": "Radiology Masterclass",
    "category": "CT",
    "summary": "Normal CT brain anatomy and orientation review.",
    "url": "https://www.radiologymasterclass.co.uk/tutorials/ct/ct_brain_anatomy/ct_brain_anatomy_page1",
    "tags": "ct brain normal"
  },
  {
    "title": "CT Brain - Blood",
    "source": "Radiology Masterclass",
    "category": "CT",
    "summary": "Educational review of intracranial blood appearances on CT.",
    "url": "https://www.radiologymasterclass.co.uk/tutorials/ct/ct_brain_pathology/ct_brain_blood",
    "tags": "hemorrhage ct"
  },
  {
    "title": "Radiology Assistant: Chest X-Ray Basic Interpretation",
    "source": "Radiology Assistant",
    "category": "Image Interpretation",
    "summary": "Detailed educational review of systematic chest radiograph interpretation.",
    "url": "https://radiologyassistant.nl/chest/chest-x-ray/basic-interpretation",
    "tags": "chest xray interpretation"
  },
  {
    "title": "Radiology Assistant: Lung Disease",
    "source": "Radiology Assistant",
    "category": "Image Interpretation",
    "summary": "Pattern-based approach to common pulmonary imaging abnormalities.",
    "url": "https://radiologyassistant.nl/chest/chest-x-ray/lung-disease",
    "tags": "lung opacity chest"
  },
  {
    "title": "Radiology Assistant: Lines and Tubes",
    "source": "Radiology Assistant",
    "category": "Image Interpretation",
    "summary": "Reviews common support devices and their expected positions on chest imaging.",
    "url": "https://radiologyassistant.nl/chest/chest-x-ray/lines-and-tubes-in-icu-patients",
    "tags": "lines tubes icu"
  },
  {
    "title": "Radiology Assistant: CT in Trauma",
    "source": "Radiology Assistant",
    "category": "CT",
    "summary": "Educational approach to CT evaluation in trauma.",
    "url": "https://radiologyassistant.nl/abdomen/acute-abdomen/ct-in-trauma",
    "tags": "trauma ct"
  },
  {
    "title": "Radiology Assistant: Acute Abdomen",
    "source": "Radiology Assistant",
    "category": "CT",
    "summary": "Imaging patterns and CT approach for acute abdominal conditions.",
    "url": "https://radiologyassistant.nl/abdomen/acute-abdomen",
    "tags": "acute abdomen ct"
  },
  {
    "title": "Radiology Assistant: Bone Tumors Differential",
    "source": "Radiology Assistant",
    "category": "Musculoskeletal",
    "summary": "Foundational radiographic features used when evaluating bone lesions.",
    "url": "https://radiologyassistant.nl/musculoskeletal/bone-tumors/differential-diagnosis",
    "tags": "bone lesion lytic sclerosis"
  },
  {
    "title": "MRI Questions: MRI Basics",
    "source": "MRI Questions",
    "category": "MRI",
    "summary": "Accessible explanations of MRI physics and terminology.",
    "url": "https://mriquestions.com/index.html",
    "tags": "mri physics basics"
  },
  {
    "title": "MRI Questions: T1 vs T2",
    "source": "MRI Questions",
    "category": "MRI",
    "summary": "Conceptual review of T1 and T2 relaxation and image weighting.",
    "url": "https://mriquestions.com/t1-vs-t2.html",
    "tags": "t1 t2 relaxation"
  },
  {
    "title": "MRI Questions: What Is FLAIR?",
    "source": "MRI Questions",
    "category": "MRI",
    "summary": "Explains fluid-attenuated inversion recovery and why CSF suppression is useful.",
    "url": "https://mriquestions.com/flair.html",
    "tags": "flair csf"
  },
  {
    "title": "MRI Questions: Diffusion",
    "source": "MRI Questions",
    "category": "MRI",
    "summary": "Explains diffusion-weighted imaging and ADC concepts.",
    "url": "https://mriquestions.com/diffusion.html",
    "tags": "dwi adc diffusion"
  },
  {
    "title": "MRI Questions: Gradient Echo",
    "source": "MRI Questions",
    "category": "MRI",
    "summary": "Introduction to gradient-echo sequences and their behavior.",
    "url": "https://mriquestions.com/gradient-echo.html",
    "tags": "gre gradient echo"
  },
  {
    "title": "MRI Questions: MRI Safety",
    "source": "MRI Questions",
    "category": "MRI Safety",
    "summary": "Collection of practical MRI safety concepts and common hazards.",
    "url": "https://mriquestions.com/safety.html",
    "tags": "mri safety"
  },
  {
    "title": "MedlinePlus: X-Rays",
    "source": "MedlinePlus",
    "category": "Modalities",
    "summary": "Consumer-friendly overview of x-ray imaging and radiation basics.",
    "url": "https://medlineplus.gov/xrays.html",
    "tags": "xray basics"
  },
  {
    "title": "MedlinePlus: CT Scans",
    "source": "MedlinePlus",
    "category": "CT",
    "summary": "Overview of CT scanning, preparation and contrast.",
    "url": "https://medlineplus.gov/ctscans.html",
    "tags": "ct basics"
  },
  {
    "title": "MedlinePlus: MRI Scans",
    "source": "MedlinePlus",
    "category": "MRI",
    "summary": "Overview of MRI exams and patient preparation.",
    "url": "https://medlineplus.gov/mriscans.html",
    "tags": "mri basics"
  },
  {
    "title": "MedlinePlus: Ultrasound",
    "source": "MedlinePlus",
    "category": "Ultrasound",
    "summary": "Overview of diagnostic ultrasound and common uses.",
    "url": "https://medlineplus.gov/ultrasound.html",
    "tags": "ultrasound basics"
  },
  {
    "title": "MedlinePlus: Mammography",
    "source": "MedlinePlus",
    "category": "Mammography",
    "summary": "Introduction to mammography and breast screening.",
    "url": "https://medlineplus.gov/mammography.html",
    "tags": "mammography"
  },
  {
    "title": "MedlinePlus: Nuclear Scans",
    "source": "MedlinePlus",
    "category": "Nuclear Medicine",
    "summary": "Overview of nuclear medicine scans and radiotracers.",
    "url": "https://medlineplus.gov/nuclearscans.html",
    "tags": "nuclear scan"
  },
  {
    "title": "Mayo Clinic: X-ray",
    "source": "Mayo Clinic",
    "category": "Modalities",
    "summary": "Patient-oriented explanation of x-ray exams, preparation and risks.",
    "url": "https://www.mayoclinic.org/tests-procedures/x-ray/about/pac-20395303",
    "tags": "xray exam"
  },
  {
    "title": "Mayo Clinic: CT Scan",
    "source": "Mayo Clinic",
    "category": "CT",
    "summary": "Patient-oriented explanation of CT imaging, contrast and preparation.",
    "url": "https://www.mayoclinic.org/tests-procedures/ct-scan/about/pac-20393675",
    "tags": "ct exam"
  },
  {
    "title": "Mayo Clinic: MRI",
    "source": "Mayo Clinic",
    "category": "MRI",
    "summary": "Patient-oriented explanation of MRI technology, preparation and safety.",
    "url": "https://www.mayoclinic.org/tests-procedures/mri/about/pac-20384768",
    "tags": "mri exam"
  },
  {
    "title": "Mayo Clinic: Ultrasound",
    "source": "Mayo Clinic",
    "category": "Ultrasound",
    "summary": "Overview of ultrasound imaging and preparation.",
    "url": "https://www.mayoclinic.org/tests-procedures/ultrasound/about/pac-20395177",
    "tags": "ultrasound exam"
  },
  {
    "title": "Mayo Clinic: Mammogram",
    "source": "Mayo Clinic",
    "category": "Mammography",
    "summary": "Overview of mammographic screening and procedure expectations.",
    "url": "https://www.mayoclinic.org/tests-procedures/mammogram/about/pac-20384806",
    "tags": "mammogram"
  },
  {
    "title": "Johns Hopkins: Computed Tomography",
    "source": "Johns Hopkins Medicine",
    "category": "CT",
    "summary": "Clinical overview of CT and common procedure considerations.",
    "url": "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/computed-tomography-ct-scan",
    "tags": "ct"
  },
  {
    "title": "Johns Hopkins: Magnetic Resonance Imaging",
    "source": "Johns Hopkins Medicine",
    "category": "MRI",
    "summary": "Clinical overview of MRI and patient safety considerations.",
    "url": "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/magnetic-resonance-imaging-mri",
    "tags": "mri"
  },
  {
    "title": "Johns Hopkins: X-rays",
    "source": "Johns Hopkins Medicine",
    "category": "Radiography & Physics",
    "summary": "General clinical introduction to diagnostic x-rays.",
    "url": "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/xrays",
    "tags": "xray"
  },
  {
    "title": "Johns Hopkins: Ultrasound",
    "source": "Johns Hopkins Medicine",
    "category": "Ultrasound",
    "summary": "Clinical overview of ultrasound imaging.",
    "url": "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/ultrasound",
    "tags": "ultrasound"
  },
  {
    "title": "CDC: Radiation in Healthcare",
    "source": "CDC",
    "category": "Radiation Protection",
    "summary": "Public-health overview of ionizing radiation used in medical diagnosis and treatment.",
    "url": "https://www.cdc.gov/radiation-health/about/healthcare.html",
    "tags": "radiation healthcare"
  },
  {
    "title": "CDC: About Ionizing Radiation",
    "source": "CDC",
    "category": "Radiation Protection",
    "summary": "Basic explanation of ionizing radiation and biological effects.",
    "url": "https://www.cdc.gov/radiation-health/about/ionizing-radiation.html",
    "tags": "ionizing radiation"
  }
];
