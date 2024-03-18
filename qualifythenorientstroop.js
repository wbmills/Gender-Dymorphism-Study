/******************************** 
 * Qualifythenorientstroop Test *
 ********************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'qualifythenorientstroop';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'prolificID': '',
};

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from code_4
score = 0;

// Run 'Before Experiment' code from counterbalancing
var loop_all_reps, tasks, tasksDone;
tasks = [0, 0];
tasksDone = [false, false];
loop_all_reps = tasksDone.length;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(ConfigRoutineBegin());
flowScheduler.add(ConfigRoutineEachFrame());
flowScheduler.add(ConfigRoutineEnd());
flowScheduler.add(GeneralIntroductionRoutineBegin());
flowScheduler.add(GeneralIntroductionRoutineEachFrame());
flowScheduler.add(GeneralIntroductionRoutineEnd());
flowScheduler.add(consent_mainRoutineBegin());
flowScheduler.add(consent_mainRoutineEachFrame());
flowScheduler.add(consent_mainRoutineEnd());
flowScheduler.add(consent_endRoutineBegin());
flowScheduler.add(consent_endRoutineEachFrame());
flowScheduler.add(consent_endRoutineEnd());
flowScheduler.add(demographics_mainRoutineBegin());
flowScheduler.add(demographics_mainRoutineEachFrame());
flowScheduler.add(demographics_mainRoutineEnd());
flowScheduler.add(demographics_endRoutineBegin());
flowScheduler.add(demographics_endRoutineEachFrame());
flowScheduler.add(demographics_endRoutineEnd());
flowScheduler.add(attitudes_mainRoutineBegin());
flowScheduler.add(attitudes_mainRoutineEachFrame());
flowScheduler.add(attitudes_mainRoutineEnd());
flowScheduler.add(attutides_endRoutineBegin());
flowScheduler.add(attutides_endRoutineEachFrame());
flowScheduler.add(attutides_endRoutineEnd());
const trials_6LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_6LoopBegin(trials_6LoopScheduler));
flowScheduler.add(trials_6LoopScheduler);
flowScheduler.add(trials_6LoopEnd);
const loop_allLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_allLoopBegin(loop_allLoopScheduler));
flowScheduler.add(loop_allLoopScheduler);
flowScheduler.add(loop_allLoopEnd);
const trials_5LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_5LoopBegin(trials_5LoopScheduler));
flowScheduler.add(trials_5LoopScheduler);
flowScheduler.add(trials_5LoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'plane.jpg', 'path': 'plane.jpg'},
    {'name': '008_03X.jpg', 'path': '008_03X.jpg'},
    {'name': 'boat.jpeg', 'path': 'boat.jpeg'},
    {'name': '018_03.jpg', 'path': '018_03.jpg'},
    {'name': '117_03.jpg', 'path': '117_03.jpg'},
    {'name': '007_03.jpg', 'path': '007_03.jpg'},
    {'name': '004_03.jpg', 'path': '004_03.jpg'},
    {'name': '006_03.jpg', 'path': '006_03.jpg'},
    {'name': 'seaside.jpeg', 'path': 'seaside.jpeg'},
    {'name': '001_03.jpg', 'path': '001_03.jpg'},
    {'name': 'deer.jpg', 'path': 'deer.jpg'},
    {'name': '139_03.jpg', 'path': '139_03.jpg'},
    {'name': '086_03.jpg', 'path': '086_03.jpg'},
    {'name': '003_03X.jpg', 'path': '003_03X.jpg'},
    {'name': '097_03.jpg', 'path': '097_03.jpg'},
    {'name': 'piano.jpg', 'path': 'piano.jpg'},
    {'name': 'WordsDBXCTRL.xlsx', 'path': 'WordsDBXCTRL.xlsx'},
    {'name': 'ball.jpg', 'path': 'ball.jpg'},
    {'name': '105_03.jpg', 'path': '105_03.jpg'},
    {'name': 'frog.jpg', 'path': 'frog.jpg'},
    {'name': '094_03.jpg', 'path': '094_03.jpg'},
    {'name': '102_03.jpg', 'path': '102_03.jpg'},
    {'name': '012_03X.jpg', 'path': '012_03X.jpg'},
    {'name': 'sun.jpg', 'path': 'sun.jpg'},
    {'name': 'hat.jpeg', 'path': 'hat.jpeg'},
    {'name': '016_03.jpg', 'path': '016_03.jpg'},
    {'name': 'horse.jpg', 'path': 'horse.jpg'},
    {'name': '107_03.jpg', 'path': '107_03.jpg'},
    {'name': '002_03.jpg', 'path': '002_03.jpg'},
    {'name': '014_03.jpg', 'path': '014_03.jpg'},
    {'name': 'QualifyDBX.xlsx', 'path': 'QualifyDBX.xlsx'},
    {'name': '024_03.jpg', 'path': '024_03.jpg'},
    {'name': 'Keyboard1.jpg', 'path': 'Keyboard1.jpg'},
    {'name': '004_03X.jpg', 'path': '004_03X.jpg'},
    {'name': '087_03.jpg', 'path': '087_03.jpg'},
    {'name': '119_03.jpg', 'path': '119_03.jpg'},
    {'name': 'chair.jpeg', 'path': 'chair.jpeg'},
    {'name': '108_03.jpg', 'path': '108_03.jpg'},
    {'name': '115_03.jpg', 'path': '115_03.jpg'},
    {'name': '009_03X.jpg', 'path': '009_03X.jpg'},
    {'name': 'apple.jpg', 'path': 'apple.jpg'},
    {'name': 'carrot.jpeg', 'path': 'carrot.jpeg'},
    {'name': '007_03X.jpg', 'path': '007_03X.jpg'},
    {'name': '002_03X.jpg', 'path': '002_03X.jpg'},
    {'name': '011_03X.jpg', 'path': '011_03X.jpg'},
    {'name': '029_03.jpg', 'path': '029_03.jpg'},
    {'name': '001_03X.jpg', 'path': '001_03X.jpg'},
    {'name': '011_03.jpg', 'path': '011_03.jpg'},
    {'name': 'house.jpeg', 'path': 'house.jpeg'},
    {'name': '026_03.jpg', 'path': '026_03.jpg'},
    {'name': '031_03.jpg', 'path': '031_03.jpg'},
    {'name': '083_03.jpg', 'path': '083_03.jpg'},
    {'name': '006_03X.jpg', 'path': '006_03X.jpg'},
    {'name': '017_03.jpg', 'path': '017_03.jpg'},
    {'name': '104_03.jpg', 'path': '104_03.jpg'},
    {'name': '005_03.jpg', 'path': '005_03.jpg'},
    {'name': '010_03X.jpg', 'path': '010_03X.jpg'},
    {'name': 'prolificID.html', 'path': 'prolificID.html'},
    {'name': '114_03.jpg', 'path': '114_03.jpg'},
    {'name': '103_03.jpg', 'path': '103_03.jpg'},
    {'name': '003_03.jpg', 'path': '003_03.jpg'},
    {'name': '010_03.jpg', 'path': '010_03.jpg'},
    {'name': 'fire.jpg', 'path': 'fire.jpg'},
    {'name': '008_03.jpg', 'path': '008_03.jpg'},
    {'name': '090_03.jpg', 'path': '090_03.jpg'},
    {'name': '112_03.jpg', 'path': '112_03.jpg'},
    {'name': '005_03X.jpg', 'path': '005_03X.jpg'},
    {'name': '101_03.jpg', 'path': '101_03.jpg'},
    {'name': '091_03.jpg', 'path': '091_03.jpg'},
    {'name': 'bee.jpg', 'path': 'bee.jpg'},
    {'name': '022_03.jpg', 'path': '022_03.jpg'},
    {'name': 'car.jpg', 'path': 'car.jpg'},
    {'name': 'demographics.html', 'path': 'demographics.html'},
    {'name': '021_03.jpg', 'path': '021_03.jpg'},
    {'name': 'consent_2.html', 'path': 'consent_2.html'},
    {'name': '012_03.jpg', 'path': '012_03.jpg'},
    {'name': '013_03.jpg', 'path': '013_03.jpg'},
    {'name': '066_03.jpg', 'path': '066_03.jpg'},
    {'name': '092_03.jpg', 'path': '092_03.jpg'},
    {'name': 'beer.jpeg', 'path': 'beer.jpeg'},
    {'name': '082_03.jpg', 'path': '082_03.jpg'},
    {'name': '100_03.jpg', 'path': '100_03.jpg'},
    {'name': '096_03.jpg', 'path': '096_03.jpg'},
    {'name': 'consent.html', 'path': 'consent.html'},
    {'name': 'tiger.jpg', 'path': 'tiger.jpg'},
    {'name': '009_03.jpg', 'path': '009_03.jpg'},
    {'name': 'WordsDBX.xlsx', 'path': 'WordsDBX.xlsx'},
    {'name': 'moon.jpg', 'path': 'moon.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://forms.gle/gZg9mwVsX4Fb9jZg9', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var ConfigClock;
var GeneralIntroductionClock;
var text_4;
var key_resp_9;
var consent_mainClock;
var loading_2;
var consent_endClock;
var demographics_mainClock;
var loading;
var demographics_endClock;
var attitudes_mainClock;
var loading_4;
var attutides_endClock;
var QualifyIntroClock;
var text_6;
var key_resp_10;
var image_5;
var QualifyTaskClock;
var text_8;
var image_4;
var polygon;
var q;
var score;
var DisQualify;
var Qualify;
var done;
var key_resp_14;
var DidTheyQualifyFortheExperimentClock;
var text_9;
var text_13;
var DisQualifyClock;
var text_11;
var counterbalancing_routineClock;
var orientation_instrClock;
var text_3;
var key_resp_4;
var orientation_stroop_routineClock;
var key_resp;
var word_text;
var image;
var focus_1;
var gender_instrClock;
var text_5;
var key_resp_5;
var gender_stroop_routineClock;
var image_2;
var word_text_gender;
var key_resp_6;
var focus_2;
var consent_2Clock;
var loading_3;
var consent_end_2Clock;
var ThankyouClock;
var text_7;
var EndClock;
var text_15;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Config"
  ConfigClock = new util.Clock();
  // Initialize components for Routine "GeneralIntroduction"
  GeneralIntroductionClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: "Welcome to the study on gender and pronouns at the University of Bristol. We recognize that gender can be interpreted in binary and non-binary ways, but in this study only binary pronouns will be presented. We also recognize that individuals can identify with whichever gender they choose, or not at all, but we seek to measure the strength of the most commonly used categories.\nWARNING: Do not exit the experiment before being directed to an online form at the end, or you will not recieve payment. Closing the window before being redirected to the form will also mean you don't receive credit.\nThere will be an initial training task, then this study consists of two parts: in one task you will be asked whether photographs of faces match pronouns (“he/she’) and in another task you will be asked whether faces presented upright, or upside down match a presented word (“upright/upside down”). \nYou may exit at any time by pressing ESC twice. Press the SPACE BAR if you are happy to proceed.\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent_main"
  consent_mainClock = new util.Clock();
  loading_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'loading_2',
    text: 'Loading...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "consent_end"
  consent_endClock = new util.Clock();
  // Initialize components for Routine "demographics_main"
  demographics_mainClock = new util.Clock();
  loading = new visual.TextStim({
    win: psychoJS.window,
    name: 'loading',
    text: 'Loading...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "demographics_end"
  demographics_endClock = new util.Clock();
  // Initialize components for Routine "attitudes_main"
  attitudes_mainClock = new util.Clock();
  loading_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'loading_4',
    text: 'Loading...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "attutides_end"
  attutides_endClock = new util.Clock();
  // Initialize components for Routine "QualifyIntro"
  QualifyIntroClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'We will now present you with a training task to familiarise you with the experimental tasks. You must score at least 16 out of 20 in the training task to be selected for the main experiment.\nYour task is to decide if the word and photo match. \nIf they match - press the right arrow\nIf they do not match - press the left arrow\nEach task has a time limit, so proceed as quickly and as accurately as you can.\nPress the SPACE BAR if you are happy to proceed.\nYou may exit at any time by pressing ESC twice.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : 'Keyboard1.jpg', mask : undefined,
    ori : 0.0, pos : [0, (- 0.2)], size : [0.5, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "QualifyTask"
  QualifyTaskClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.2], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.5, 0.5],
    ori: 0.0, pos: [0, 0.2],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  // Run 'Begin Experiment' code from code_3
  q = 1;
  score = 0;
  DisQualify = [0];
  Qualify = [0];
  done = false;
  
  key_resp_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "DidTheyQualifyFortheExperiment"
  DidTheyQualifyFortheExperimentClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from code_2
  DisQualify = [0];
  Qualify = [0];
  
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'Your score out of 20 points in the qualifying task was.:\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "DisQualify"
  DisQualifyClock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'Sorry but your score on the training task does not meet the criteria of\nat least 16 correct answers for doing the main experiment. \nPlease try again.\n\nThanks for trying.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "counterbalancing_routine"
  counterbalancing_routineClock = new util.Clock();
  // Initialize components for Routine "orientation_instr"
  orientation_instrClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'You will be shown some photos of faces with corresponding words. Some faces will be in an upright position and some will be inverted. Together with each photo there will also be displayed a word: "upright" or "upside down".\n\nYour task is to decide whether the face orientation you are seeing matches the word. You will have only 3 seconds to answer so please respond as quickly as you can. To respond, press the left arrow on your keyboard for “no” and the right arrow for “yes”.\n\nPress the SPACE BAR if you are happy to proceed.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "orientation_stroop_routine"
  orientation_stroop_routineClock = new util.Clock();
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  word_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'word_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.2], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  focus_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'focus_1', 
    vertices: 'cross', size:[0.5, 0.5],
    ori: 0.0, pos: [0, 0.2],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  // Initialize components for Routine "gender_instr"
  gender_instrClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'You will be shown some photos of faces along with binary pronouns “he/she”. \n\nYour task is to decide whether the face you are seeing matches the pronoun. You will have only 3 seconds to answer so please respond as quickly as you can. To respond, press the left arrow on your keyboard for “no” and the right arrow for “yes”.\n\nPress the SPACE BAR if you are happy to proceed.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "gender_stroop_routine"
  gender_stroop_routineClock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.2], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  word_text_gender = new visual.TextStim({
    win: psychoJS.window,
    name: 'word_text_gender',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  focus_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'focus_2', 
    vertices: 'cross', size:[0.5, 0.5],
    ori: 0.0, pos: [0, 0.2],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  // Initialize components for Routine "consent_2"
  consent_2Clock = new util.Clock();
  loading_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'loading_3',
    text: 'Loading...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "consent_end_2"
  consent_end_2Clock = new util.Clock();
  // Initialize components for Routine "Thankyou"
  ThankyouClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'We are now downloading your data from the experiment.\nPlease wait to be redirected to an online form. \nWARNING: If you do not fill in this form, you will not receive payment!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: 'Thank you for taking part in the experiment!\nYou are now being redirected to an online form.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var ConfigComponents;
function ConfigRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Config' ---
    t = 0;
    ConfigClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    ConfigComponents = [];
    
    for (const thisComponent of ConfigComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ConfigRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Config' ---
    // get current time
    t = ConfigClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ConfigComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ConfigRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Config' ---
    for (const thisComponent of ConfigComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Config" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_9_allKeys;
var GeneralIntroductionComponents;
function GeneralIntroductionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GeneralIntroduction' ---
    t = 0;
    GeneralIntroductionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    GeneralIntroductionComponents = [];
    GeneralIntroductionComponents.push(text_4);
    GeneralIntroductionComponents.push(key_resp_9);
    
    for (const thisComponent of GeneralIntroductionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GeneralIntroductionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GeneralIntroduction' ---
    // get current time
    t = GeneralIntroductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GeneralIntroductionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GeneralIntroductionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GeneralIntroduction' ---
    for (const thisComponent of GeneralIntroductionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "GeneralIntroduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var params;
var continue_routine;
var consent_mainComponents;
function consent_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_main' ---
    t = 0;
    consent_mainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // This routine should not start straight away or the screen width and height
    // may be incorrect.
    
    expInfo['xRes'] = screen.width;
    expInfo['yRes'] = screen.height;
    console.log("screen xRes",expInfo['xRes']);
    console.log("screen yRes",expInfo['yRes']);
    
    //let src = ('demographics.html?xRes='+expInfo['xRes']+'&yRes='+expInfo['yRes']);
    let src = ('consent.html');
    
    params = {};  // Results added here after form is submitted
    continue_routine = true; // Routines can't be ended from within Begin Routine
    $(document).ready(function() {
        // Add custom contents from html file using an iframe:
        $('body').append('<div id="iframe-o" style="visibility: hidden; position: relative; display: table; margin: auto; overflow-x: hidden; overflow-y: scroll !important; -webkit-overflow-y-scrolling:touch !important;"><div id="iframe-m" style="display: table-cell; vertical-align: middle;"><div id="iframe-i" style="display: inline-block; width:100%; overflow-y: hidden; overflow-x: hidden;"><iframe id="iframe" src="'+src+'" frameborder="0" style="width: 100%; overflow-y: hidden; overflow-x: hidden; "></iframe></div></div></div>');
        $('#iframe').on('load',function(iframe){
            // Auto-adjust iframe size:
            $(this).contents().find('html').css({ 'display': 'table', 'width': '100%', 'overflow-x': 'hidden' });
            $('#iframe-o').height($(window).height()-20, true);
            $('#iframe-m').width($(this).contents().find('html').width()+100);
           $('#iframe-i').height ( Math.max ( $(this).contents().find('html').height()+20, $(window).height()-20 ), true );
            $(this).height($(this).contents().find('html').height());
            $('#iframe-o').css('visibility','visible');
    
            // If iframe contains a form, then capture its output:
            $(this).contents().find('form').on('submit',function(e){
                e.preventDefault();
                $.each($(this).serializeArray(),function(i, param){
                    params[param.name] = param.value;
                    psychoJS.experiment.addData(param.name, param.value);
                });
                console.log ( 'DEBUG:FRM', params );
                // Remove iframe and continue to next routine when done:
                $('#iframe-o').remove();
                continue_routine = false;
            });
        });
    });
    //$('#iframe').attr( 'src', function(i,val){ return val;} );
    // keep track of which components have finished
    consent_mainComponents = [];
    consent_mainComponents.push(loading_2);
    
    for (const thisComponent of consent_mainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_mainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_main' ---
    // get current time
    t = consent_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *loading_2* updates
    if (t >= 0.0 && loading_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      loading_2.tStart = t;  // (not accounting for frame time here)
      loading_2.frameNStart = frameN;  // exact frame index
      
      loading_2.setAutoDraw(true);
    }

    continueRoutine = continue_routine;
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_mainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_mainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_main' ---
    for (const thisComponent of consent_mainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // expInfo variables appear on every line in the data file
    // after they are created.
    expInfo['vision'] = psychoJS.experiment._currentTrialData['Qvision'];
    expInfo['explain'] = psychoJS.experiment._currentTrialData['Qexplain'];
    expInfo['ask'] = psychoJS.experiment._currentTrialData['Qask'];
    expInfo['info'] = psychoJS.experiment._currentTrialData['Qinfo'];
    expInfo['info2'] = psychoJS.experiment._currentTrialData['Qinfo2'];
    expInfo['conformation_1'] = psychoJS.experiment._currentTrialData['Qconformation_1'];
    expInfo['QpavloviaID'] = psychoJS.experiment._currentTrialData['QpavloviaID'];
    continueRoutine = false;
    // the Routine "consent_main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consent_endComponents;
function consent_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_end' ---
    t = 0;
    consent_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from skip_offline_4
    continueRoutine = false;
    
    // keep track of which components have finished
    consent_endComponents = [];
    
    for (const thisComponent of consent_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_end' ---
    // get current time
    t = consent_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_end' ---
    for (const thisComponent of consent_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "consent_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demographics_mainComponents;
function demographics_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demographics_main' ---
    t = 0;
    demographics_mainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // This routine should not start straight away or the screen width and height
    // may be incorrect.
    
    expInfo['xRes'] = screen.width;
    expInfo['yRes'] = screen.height;
    console.log("screen xRes",expInfo['xRes']);
    console.log("screen yRes",expInfo['yRes']);
    
    //let src = ('demographics.html?xRes='+expInfo['xRes']+'&yRes='+expInfo['yRes']);
    let src = ('demographics.html');
    
    params = {};  // Results added here after form is submitted
    continue_routine = true; // Routines can't be ended from within Begin Routine
    $(document).ready(function() {
        // Add custom contents from html file using an iframe:
        $('body').append('<div id="iframe-o" style="visibility: hidden; position: relative; display: table; margin: auto; overflow-x: hidden; overflow-y: scroll !important; -webkit-overflow-y-scrolling:touch !important;"><div id="iframe-m" style="display: table-cell; vertical-align: middle;"><div id="iframe-i" style="display: inline-block; width:100%; overflow-y: hidden; overflow-x: hidden;"><iframe id="iframe" src="'+src+'" frameborder="0" style="width: 100%; overflow-y: hidden; overflow-x: hidden; "></iframe></div></div></div>');
        $('#iframe').on('load',function(iframe){
            // Auto-adjust iframe size:
            $(this).contents().find('html').css({ 'display': 'table', 'width': '100%', 'overflow-x': 'hidden' });
            $('#iframe-o').height($(window).height()-20, true);
            $('#iframe-m').width($(this).contents().find('html').width()+100);
           $('#iframe-i').height ( Math.max ( $(this).contents().find('html').height()+20, $(window).height()-20 ), true );
            $(this).height($(this).contents().find('html').height());
            $('#iframe-o').css('visibility','visible');
    
            // If iframe contains a form, then capture its output:
            $(this).contents().find('form').on('submit',function(e){
                e.preventDefault();
                $.each($(this).serializeArray(),function(i, param){
                    params[param.name] = param.value;
                    psychoJS.experiment.addData(param.name, param.value);
                });
                console.log ( 'DEBUG:FRM', params );
                // Remove iframe and continue to next routine when done:
                $('#iframe-o').remove();
                continue_routine = false;
            });
        });
    });
    //$('#iframe').attr( 'src', function(i,val){ return val;} );
    // keep track of which components have finished
    demographics_mainComponents = [];
    demographics_mainComponents.push(loading);
    
    for (const thisComponent of demographics_mainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function demographics_mainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demographics_main' ---
    // get current time
    t = demographics_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *loading* updates
    if (t >= 0.0 && loading.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      loading.tStart = t;  // (not accounting for frame time here)
      loading.frameNStart = frameN;  // exact frame index
      
      loading.setAutoDraw(true);
    }

    continueRoutine = continue_routine;
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demographics_mainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demographics_mainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demographics_main' ---
    for (const thisComponent of demographics_mainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // expInfo variables appear on every line in the data file
    // after they are created.
    expInfo['consent'] = psychoJS.experiment._currentTrialData['Qconsent'];
    expInfo['gender'] = psychoJS.experiment._currentTrialData['Qgender'];
    expInfo['age'] = psychoJS.experiment._currentTrialData['Qage'];
    expInfo['english'] = psychoJS.experiment._currentTrialData['Qenglish'];
    expInfo['handedness'] = psychoJS.experiment._currentTrialData['Qhandedness'];
    continueRoutine = false;
    // the Routine "demographics_main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demographics_endComponents;
function demographics_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demographics_end' ---
    t = 0;
    demographics_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from skip_offline_2
    continueRoutine = false;
    
    // keep track of which components have finished
    demographics_endComponents = [];
    
    for (const thisComponent of demographics_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function demographics_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demographics_end' ---
    // get current time
    t = demographics_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demographics_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demographics_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demographics_end' ---
    for (const thisComponent of demographics_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "demographics_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var attitudes_mainComponents;
function attitudes_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'attitudes_main' ---
    t = 0;
    attitudes_mainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // This routine should not start straight away or the screen width and height
    // may be incorrect.
    
    expInfo['xRes'] = screen.width;
    expInfo['yRes'] = screen.height;
    console.log("screen xRes",expInfo['xRes']);
    console.log("screen yRes",expInfo['yRes']);
    
    //let src = ('demographics.html?xRes='+expInfo['xRes']+'&yRes='+expInfo['yRes']);
    let src = ('attitudes.html');
    
    params = {};  // Results added here after form is submitted
    continue_routine = true; // Routines can't be ended from within Begin Routine
    $(document).ready(function() {
        // Add custom contents from html file using an iframe:
        $('body').append('<div id="iframe-o" style="visibility: hidden; position: relative; display: table; margin: auto; overflow-x: hidden; overflow-y: scroll !important; -webkit-overflow-y-scrolling:touch !important;"><div id="iframe-m" style="display: table-cell; vertical-align: middle;"><div id="iframe-i" style="display: inline-block; width:100%; overflow-y: hidden; overflow-x: hidden;"><iframe id="iframe" src="'+src+'" frameborder="0" style="width: 100%; overflow-y: hidden; overflow-x: hidden; "></iframe></div></div></div>');
        $('#iframe').on('load',function(iframe){
            // Auto-adjust iframe size:
            $(this).contents().find('html').css({ 'display': 'table', 'width': '100%', 'overflow-x': 'hidden' });
            $('#iframe-o').height($(window).height()-20, true);
            $('#iframe-m').width($(this).contents().find('html').width()+100);
           $('#iframe-i').height ( Math.max ( $(this).contents().find('html').height()+20, $(window).height()-20 ), true );
            $(this).height($(this).contents().find('html').height());
            $('#iframe-o').css('visibility','visible');
    
            // If iframe contains a form, then capture its output:
            $(this).contents().find('form').on('submit',function(e){
                e.preventDefault();
                $.each($(this).serializeArray(),function(i, param){
                    params[param.name] = param.value;
                    psychoJS.experiment.addData(param.name, param.value);
                });
                console.log ( 'DEBUG:FRM', params );
                // Remove iframe and continue to next routine when done:
                $('#iframe-o').remove();
                continue_routine = false;
            });
        });
    });
    //$('#iframe').attr( 'src', function(i,val){ return val;} );
    // keep track of which components have finished
    attitudes_mainComponents = [];
    attitudes_mainComponents.push(loading_4);
    
    for (const thisComponent of attitudes_mainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function attitudes_mainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'attitudes_main' ---
    // get current time
    t = attitudes_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *loading_4* updates
    if (t >= 0.0 && loading_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      loading_4.tStart = t;  // (not accounting for frame time here)
      loading_4.frameNStart = frameN;  // exact frame index
      
      loading_4.setAutoDraw(true);
    }

    continueRoutine = continue_routine;
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attitudes_mainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attitudes_mainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'attitudes_main' ---
    for (const thisComponent of attitudes_mainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // expInfo variables appear on every line in the data file
    // after they are created.
    expInfo['QlocationUpbringing'] = psychoJS.experiment._currentTrialData['QlocationUpbringing'];
    expInfo['QpronounImportance'] = psychoJS.experiment._currentTrialData['QpronounImportance'];
    expInfo['QpronounVisual'] = psychoJS.experiment._currentTrialData['QpronounVisual'];
    expInfo['QpronounAddress'] = psychoJS.experiment._currentTrialData['QpronounAddress'];
    expInfo['QpronounAnxiety'] = psychoJS.experiment._currentTrialData['QpronounAnxiety'];
    continueRoutine = false;
    // the Routine "attitudes_main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var attutides_endComponents;
function attutides_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'attutides_end' ---
    t = 0;
    attutides_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from skip_offline_8
    continueRoutine = false;
    
    // keep track of which components have finished
    attutides_endComponents = [];
    
    for (const thisComponent of attutides_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function attutides_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'attutides_end' ---
    // get current time
    t = attutides_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attutides_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attutides_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'attutides_end' ---
    for (const thisComponent of attutides_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "attutides_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_6;
function trials_6LoopBegin(trials_6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_6'
    });
    psychoJS.experiment.addLoop(trials_6); // add the loop to the experiment
    currentLoop = trials_6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_6 of trials_6) {
      snapshot = trials_6.getSnapshot();
      trials_6LoopScheduler.add(importConditions(snapshot));
      const trials_7LoopScheduler = new Scheduler(psychoJS);
      trials_6LoopScheduler.add(trials_7LoopBegin(trials_7LoopScheduler, snapshot));
      trials_6LoopScheduler.add(trials_7LoopScheduler);
      trials_6LoopScheduler.add(trials_7LoopEnd);
      const trials_3LoopScheduler = new Scheduler(psychoJS);
      trials_6LoopScheduler.add(trials_3LoopBegin(trials_3LoopScheduler, snapshot));
      trials_6LoopScheduler.add(trials_3LoopScheduler);
      trials_6LoopScheduler.add(trials_3LoopEnd);
      const trials_8LoopScheduler = new Scheduler(psychoJS);
      trials_6LoopScheduler.add(trials_8LoopBegin(trials_8LoopScheduler, snapshot));
      trials_6LoopScheduler.add(trials_8LoopScheduler);
      trials_6LoopScheduler.add(trials_8LoopEnd);
      const trials_4LoopScheduler = new Scheduler(psychoJS);
      trials_6LoopScheduler.add(trials_4LoopBegin(trials_4LoopScheduler, snapshot));
      trials_6LoopScheduler.add(trials_4LoopScheduler);
      trials_6LoopScheduler.add(trials_4LoopEnd);
      trials_6LoopScheduler.add(trials_6LoopEndIteration(trials_6LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_7;
function trials_7LoopBegin(trials_7LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_7 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: q, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_7'
    });
    psychoJS.experiment.addLoop(trials_7); // add the loop to the experiment
    currentLoop = trials_7;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_7 of trials_7) {
      snapshot = trials_7.getSnapshot();
      trials_7LoopScheduler.add(importConditions(snapshot));
      trials_7LoopScheduler.add(QualifyIntroRoutineBegin(snapshot));
      trials_7LoopScheduler.add(QualifyIntroRoutineEachFrame());
      trials_7LoopScheduler.add(QualifyIntroRoutineEnd(snapshot));
      trials_7LoopScheduler.add(trials_7LoopEndIteration(trials_7LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_7LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_7);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_7LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: q, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'QualifyDBX.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(QualifyTaskRoutineBegin(snapshot));
      trials_3LoopScheduler.add(QualifyTaskRoutineEachFrame());
      trials_3LoopScheduler.add(QualifyTaskRoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_8;
function trials_8LoopBegin(trials_8LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_8 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: q, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_8'
    });
    psychoJS.experiment.addLoop(trials_8); // add the loop to the experiment
    currentLoop = trials_8;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_8 of trials_8) {
      snapshot = trials_8.getSnapshot();
      trials_8LoopScheduler.add(importConditions(snapshot));
      trials_8LoopScheduler.add(DidTheyQualifyFortheExperimentRoutineBegin(snapshot));
      trials_8LoopScheduler.add(DidTheyQualifyFortheExperimentRoutineEachFrame());
      trials_8LoopScheduler.add(DidTheyQualifyFortheExperimentRoutineEnd(snapshot));
      trials_8LoopScheduler.add(trials_8LoopEndIteration(trials_8LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_8LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_8);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_8LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: DisQualify[0], method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_4 of trials_4) {
      snapshot = trials_4.getSnapshot();
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(DisQualifyRoutineBegin(snapshot));
      trials_4LoopScheduler.add(DisQualifyRoutineEachFrame());
      trials_4LoopScheduler.add(DisQualifyRoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_6LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_6);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_6LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop_all;
function loop_allLoopBegin(loop_allLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_all = new TrialHandler({
      psychoJS: psychoJS,
      nReps: loop_all_reps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop_all'
    });
    psychoJS.experiment.addLoop(loop_all); // add the loop to the experiment
    currentLoop = loop_all;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_all of loop_all) {
      snapshot = loop_all.getSnapshot();
      loop_allLoopScheduler.add(importConditions(snapshot));
      loop_allLoopScheduler.add(counterbalancing_routineRoutineBegin(snapshot));
      loop_allLoopScheduler.add(counterbalancing_routineRoutineEachFrame());
      loop_allLoopScheduler.add(counterbalancing_routineRoutineEnd(snapshot));
      const orientation_trialLoopScheduler = new Scheduler(psychoJS);
      loop_allLoopScheduler.add(orientation_trialLoopBegin(orientation_trialLoopScheduler, snapshot));
      loop_allLoopScheduler.add(orientation_trialLoopScheduler);
      loop_allLoopScheduler.add(orientation_trialLoopEnd);
      const gender_stroop_trialLoopScheduler = new Scheduler(psychoJS);
      loop_allLoopScheduler.add(gender_stroop_trialLoopBegin(gender_stroop_trialLoopScheduler, snapshot));
      loop_allLoopScheduler.add(gender_stroop_trialLoopScheduler);
      loop_allLoopScheduler.add(gender_stroop_trialLoopEnd);
      loop_allLoopScheduler.add(loop_allLoopEndIteration(loop_allLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var orientation_trial;
function orientation_trialLoopBegin(orientation_trialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    orientation_trial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: tasks[0], method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'orientation_trial'
    });
    psychoJS.experiment.addLoop(orientation_trial); // add the loop to the experiment
    currentLoop = orientation_trial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisOrientation_trial of orientation_trial) {
      snapshot = orientation_trial.getSnapshot();
      orientation_trialLoopScheduler.add(importConditions(snapshot));
      orientation_trialLoopScheduler.add(orientation_instrRoutineBegin(snapshot));
      orientation_trialLoopScheduler.add(orientation_instrRoutineEachFrame());
      orientation_trialLoopScheduler.add(orientation_instrRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      orientation_trialLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      orientation_trialLoopScheduler.add(trialsLoopScheduler);
      orientation_trialLoopScheduler.add(trialsLoopEnd);
      orientation_trialLoopScheduler.add(orientation_trialLoopEndIteration(orientation_trialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'WordsDBXCTRL.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(orientation_stroop_routineRoutineBegin(snapshot));
      trialsLoopScheduler.add(orientation_stroop_routineRoutineEachFrame());
      trialsLoopScheduler.add(orientation_stroop_routineRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function orientation_trialLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(orientation_trial);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function orientation_trialLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var gender_stroop_trial;
function gender_stroop_trialLoopBegin(gender_stroop_trialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    gender_stroop_trial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: tasks[1], method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'gender_stroop_trial'
    });
    psychoJS.experiment.addLoop(gender_stroop_trial); // add the loop to the experiment
    currentLoop = gender_stroop_trial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisGender_stroop_trial of gender_stroop_trial) {
      snapshot = gender_stroop_trial.getSnapshot();
      gender_stroop_trialLoopScheduler.add(importConditions(snapshot));
      gender_stroop_trialLoopScheduler.add(gender_instrRoutineBegin(snapshot));
      gender_stroop_trialLoopScheduler.add(gender_instrRoutineEachFrame());
      gender_stroop_trialLoopScheduler.add(gender_instrRoutineEnd(snapshot));
      const trials_2LoopScheduler = new Scheduler(psychoJS);
      gender_stroop_trialLoopScheduler.add(trials_2LoopBegin(trials_2LoopScheduler, snapshot));
      gender_stroop_trialLoopScheduler.add(trials_2LoopScheduler);
      gender_stroop_trialLoopScheduler.add(trials_2LoopEnd);
      gender_stroop_trialLoopScheduler.add(gender_stroop_trialLoopEndIteration(gender_stroop_trialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'WordsDBX.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(gender_stroop_routineRoutineBegin(snapshot));
      trials_2LoopScheduler.add(gender_stroop_routineRoutineEachFrame());
      trials_2LoopScheduler.add(gender_stroop_routineRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function gender_stroop_trialLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(gender_stroop_trial);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function gender_stroop_trialLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function loop_allLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_all);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_allLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_5;
function trials_5LoopBegin(trials_5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_5'
    });
    psychoJS.experiment.addLoop(trials_5); // add the loop to the experiment
    currentLoop = trials_5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_5 of trials_5) {
      snapshot = trials_5.getSnapshot();
      trials_5LoopScheduler.add(importConditions(snapshot));
      trials_5LoopScheduler.add(consent_2RoutineBegin(snapshot));
      trials_5LoopScheduler.add(consent_2RoutineEachFrame());
      trials_5LoopScheduler.add(consent_2RoutineEnd(snapshot));
      trials_5LoopScheduler.add(consent_end_2RoutineBegin(snapshot));
      trials_5LoopScheduler.add(consent_end_2RoutineEachFrame());
      trials_5LoopScheduler.add(consent_end_2RoutineEnd(snapshot));
      trials_5LoopScheduler.add(ThankyouRoutineBegin(snapshot));
      trials_5LoopScheduler.add(ThankyouRoutineEachFrame());
      trials_5LoopScheduler.add(ThankyouRoutineEnd(snapshot));
      trials_5LoopScheduler.add(EndRoutineBegin(snapshot));
      trials_5LoopScheduler.add(EndRoutineEachFrame());
      trials_5LoopScheduler.add(EndRoutineEnd(snapshot));
      trials_5LoopScheduler.add(trials_5LoopEndIteration(trials_5LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_5LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_5);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_5LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _key_resp_10_allKeys;
var QualifyIntroComponents;
function QualifyIntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'QualifyIntro' ---
    t = 0;
    QualifyIntroClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // Run 'Begin Routine' code from code_7
    score = 0;
    
    // keep track of which components have finished
    QualifyIntroComponents = [];
    QualifyIntroComponents.push(text_6);
    QualifyIntroComponents.push(key_resp_10);
    QualifyIntroComponents.push(image_5);
    
    for (const thisComponent of QualifyIntroComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function QualifyIntroRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'QualifyIntro' ---
    // get current time
    t = QualifyIntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_5* updates
    if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of QualifyIntroComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function QualifyIntroRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'QualifyIntro' ---
    for (const thisComponent of QualifyIntroComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "QualifyIntro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_14_allKeys;
var QualifyTaskComponents;
function QualifyTaskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'QualifyTask' ---
    t = 0;
    QualifyTaskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    text_8.setText(word1);
    image_4.setImage(filePath1);
    key_resp_14.keys = undefined;
    key_resp_14.rt = undefined;
    _key_resp_14_allKeys = [];
    // keep track of which components have finished
    QualifyTaskComponents = [];
    QualifyTaskComponents.push(text_8);
    QualifyTaskComponents.push(image_4);
    QualifyTaskComponents.push(polygon);
    QualifyTaskComponents.push(key_resp_14);
    
    for (const thisComponent of QualifyTaskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function QualifyTaskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'QualifyTask' ---
    // get current time
    t = QualifyTaskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.5 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    frameRemains = 0.5 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
    }
    
    // *image_4* updates
    if (t >= 0.5 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }

    frameRemains = 0.5 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_4.setAutoDraw(false);
    }
    
    // *polygon* updates
    if (t >= 0.05 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    frameRemains = 0.05 + 0.35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    
    // *key_resp_14* updates
    if (t >= 0.5 && key_resp_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_14.tStart = t;  // (not accounting for frame time here)
      key_resp_14.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_14.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.clearEvents(); });
    }

    frameRemains = 0.5 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_14.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_14.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_14.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_14_allKeys = _key_resp_14_allKeys.concat(theseKeys);
      if (_key_resp_14_allKeys.length > 0) {
        key_resp_14.keys = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].name;  // just the last key pressed
        key_resp_14.rt = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_14.keys == correctAns1) {
            key_resp_14.corr = 1;
        } else {
            key_resp_14.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of QualifyTaskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function QualifyTaskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'QualifyTask' ---
    for (const thisComponent of QualifyTaskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_3
    if ((key_resp_14.corr === 1)) {
        score = (score + 1);
    } else {
        score = score;
    }
    
    // was no response the correct answer?!
    if (key_resp_14.keys === undefined) {
      if (['None','none',undefined].includes(correctAns1)) {
         key_resp_14.corr = 1;  // correct non-response
      } else {
         key_resp_14.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_14.corr, level);
    }
    psychoJS.experiment.addData('key_resp_14.keys', key_resp_14.keys);
    psychoJS.experiment.addData('key_resp_14.corr', key_resp_14.corr);
    if (typeof key_resp_14.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_14.rt', key_resp_14.rt);
        routineTimer.reset();
        }
    
    key_resp_14.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var DidTheyQualifyFortheExperimentComponents;
function DidTheyQualifyFortheExperimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'DidTheyQualifyFortheExperiment' ---
    t = 0;
    DidTheyQualifyFortheExperimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    DidTheyQualifyFortheExperimentComponents = [];
    DidTheyQualifyFortheExperimentComponents.push(text_9);
    DidTheyQualifyFortheExperimentComponents.push(text_13);
    
    for (const thisComponent of DidTheyQualifyFortheExperimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function DidTheyQualifyFortheExperimentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'DidTheyQualifyFortheExperiment' ---
    // get current time
    t = DidTheyQualifyFortheExperimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    frameRemains = 0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_9.setAutoDraw(false);
    }
    
    if (text_9.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_9.setText(score, false);
    }
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_13.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of DidTheyQualifyFortheExperimentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DidTheyQualifyFortheExperimentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'DidTheyQualifyFortheExperiment' ---
    for (const thisComponent of DidTheyQualifyFortheExperimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_2
    if (((score < 16) && (done === false))) {
        DisQualify = [1];
        q = 1;
    } else {
        Qualify = [1];
        DisQualify = [0];
        q = 0;
        done = true;
    }
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var DisQualifyComponents;
function DisQualifyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'DisQualify' ---
    t = 0;
    DisQualifyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    DisQualifyComponents = [];
    DisQualifyComponents.push(text_11);
    
    for (const thisComponent of DisQualifyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function DisQualifyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'DisQualify' ---
    // get current time
    t = DisQualifyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_11.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of DisQualifyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DisQualifyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'DisQualify' ---
    for (const thisComponent of DisQualifyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var counterbalancing_routineComponents;
function counterbalancing_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'counterbalancing_routine' ---
    t = 0;
    counterbalancing_routineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from counterbalancing
    done = false;
    while ((done === false)) {
        var r = Math.floor(Math.random() * 3);
        if (((tasks[r] === 0) && (! tasksDone[r]))) {
            tasks[r] = 1;
            done = true;
        }
    }
    for (var i, _pj_c = 0, _pj_a = util.range(0, tasks.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((tasksDone[i] === true)) {
            tasks[i] = 0;
        }
    }
    tasksDone[r] = true;
    
    // keep track of which components have finished
    counterbalancing_routineComponents = [];
    
    for (const thisComponent of counterbalancing_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function counterbalancing_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'counterbalancing_routine' ---
    // get current time
    t = counterbalancing_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of counterbalancing_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function counterbalancing_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'counterbalancing_routine' ---
    for (const thisComponent of counterbalancing_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "counterbalancing_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_4_allKeys;
var orientation_instrComponents;
function orientation_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'orientation_instr' ---
    t = 0;
    orientation_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    orientation_instrComponents = [];
    orientation_instrComponents.push(text_3);
    orientation_instrComponents.push(key_resp_4);
    
    for (const thisComponent of orientation_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function orientation_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'orientation_instr' ---
    // get current time
    t = orientation_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of orientation_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function orientation_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'orientation_instr' ---
    for (const thisComponent of orientation_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "orientation_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var orientation_stroop_routineComponents;
function orientation_stroop_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'orientation_stroop_routine' ---
    t = 0;
    orientation_stroop_routineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    word_text.setText(word3);
    image.setImage(filePath3);
    // keep track of which components have finished
    orientation_stroop_routineComponents = [];
    orientation_stroop_routineComponents.push(key_resp);
    orientation_stroop_routineComponents.push(word_text);
    orientation_stroop_routineComponents.push(image);
    orientation_stroop_routineComponents.push(focus_1);
    
    for (const thisComponent of orientation_stroop_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function orientation_stroop_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'orientation_stroop_routine' ---
    // get current time
    t = orientation_stroop_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp* updates
    if (t >= 0.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp.clock.reset();
      key_resp.start();
      key_resp.clearEvents();
    }

    frameRemains = 0.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == correctAns3) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *word_text* updates
    if (t >= 0.5 && word_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word_text.tStart = t;  // (not accounting for frame time here)
      word_text.frameNStart = frameN;  // exact frame index
      
      word_text.setAutoDraw(true);
    }

    frameRemains = 0.5 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (word_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      word_text.setAutoDraw(false);
    }
    
    // *image* updates
    if (t >= 0.5 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    frameRemains = 0.5 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // *focus_1* updates
    if (t >= 0.05 && focus_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      focus_1.tStart = t;  // (not accounting for frame time here)
      focus_1.frameNStart = frameN;  // exact frame index
      
      focus_1.setAutoDraw(true);
    }

    frameRemains = 0.05 + 0.35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (focus_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      focus_1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of orientation_stroop_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function orientation_stroop_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'orientation_stroop_routine' ---
    for (const thisComponent of orientation_stroop_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(correctAns3)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_5_allKeys;
var gender_instrComponents;
function gender_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'gender_instr' ---
    t = 0;
    gender_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    gender_instrComponents = [];
    gender_instrComponents.push(text_5);
    gender_instrComponents.push(key_resp_5);
    
    for (const thisComponent of gender_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function gender_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'gender_instr' ---
    // get current time
    t = gender_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of gender_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function gender_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'gender_instr' ---
    for (const thisComponent of gender_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "gender_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_6_allKeys;
var gender_stroop_routineComponents;
function gender_stroop_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'gender_stroop_routine' ---
    t = 0;
    gender_stroop_routineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.500000);
    // update component parameters for each repeat
    image_2.setImage(filePath2);
    word_text_gender.setText(word2);
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    gender_stroop_routineComponents = [];
    gender_stroop_routineComponents.push(image_2);
    gender_stroop_routineComponents.push(word_text_gender);
    gender_stroop_routineComponents.push(key_resp_6);
    gender_stroop_routineComponents.push(focus_2);
    
    for (const thisComponent of gender_stroop_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function gender_stroop_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'gender_stroop_routine' ---
    // get current time
    t = gender_stroop_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.5 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
    }
    
    // *word_text_gender* updates
    if (t >= 0.5 && word_text_gender.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word_text_gender.tStart = t;  // (not accounting for frame time here)
      word_text_gender.frameNStart = frameN;  // exact frame index
      
      word_text_gender.setAutoDraw(true);
    }

    frameRemains = 0.5 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (word_text_gender.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      word_text_gender.setAutoDraw(false);
    }
    
    // *key_resp_6* updates
    if (t >= 0.5 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    frameRemains = 0.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_6.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_6.keys == correctAns2) {
            key_resp_6.corr = 1;
        } else {
            key_resp_6.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *focus_2* updates
    if (t >= 0.05 && focus_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      focus_2.tStart = t;  // (not accounting for frame time here)
      focus_2.frameNStart = frameN;  // exact frame index
      
      focus_2.setAutoDraw(true);
    }

    frameRemains = 0.05 + 0.35 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (focus_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      focus_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of gender_stroop_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function gender_stroop_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'gender_stroop_routine' ---
    for (const thisComponent of gender_stroop_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_6.keys === undefined) {
      if (['None','none',undefined].includes(correctAns2)) {
         key_resp_6.corr = 1;  // correct non-response
      } else {
         key_resp_6.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    psychoJS.experiment.addData('key_resp_6.corr', key_resp_6.corr);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consent_2Components;
function consent_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_2' ---
    t = 0;
    consent_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // This routine should not start straight away or the screen width and height
    // may be incorrect.
    
    expInfo['xRes'] = screen.width;
    expInfo['yRes'] = screen.height;
    console.log("screen xRes",expInfo['xRes']);
    console.log("screen yRes",expInfo['yRes']);
    
    //let src = ('demographics.html?xRes='+expInfo['xRes']+'&yRes='+expInfo['yRes']);
    let src = ('consent_2.html');
    
    params = {};  // Results added here after form is submitted
    continue_routine = true; // Routines can't be ended from within Begin Routine
    $(document).ready(function() {
        // Add custom contents from html file using an iframe:
        $('body').append('<div id="iframe-o" style="visibility: hidden; position: relative; display: table; margin: auto; overflow-x: hidden; overflow-y: scroll !important; -webkit-overflow-y-scrolling:touch !important;"><div id="iframe-m" style="display: table-cell; vertical-align: middle;"><div id="iframe-i" style="display: inline-block; width:100%; overflow-y: hidden; overflow-x: hidden;"><iframe id="iframe" src="'+src+'" frameborder="0" style="width: 100%; overflow-y: hidden; overflow-x: hidden; "></iframe></div></div></div>');
        $('#iframe').on('load',function(iframe){
            // Auto-adjust iframe size:
            $(this).contents().find('html').css({ 'display': 'table', 'width': '100%', 'overflow-x': 'hidden' });
            $('#iframe-o').height($(window).height()-20, true);
            $('#iframe-m').width($(this).contents().find('html').width()+100);
           $('#iframe-i').height ( Math.max ( $(this).contents().find('html').height()+20, $(window).height()-20 ), true );
            $(this).height($(this).contents().find('html').height());
            $('#iframe-o').css('visibility','visible');
    
            // If iframe contains a form, then capture its output:
            $(this).contents().find('form').on('submit',function(e){
                e.preventDefault();
                $.each($(this).serializeArray(),function(i, param){
                    params[param.name] = param.value;
                    psychoJS.experiment.addData(param.name, param.value);
                });
                console.log ( 'DEBUG:FRM', params );
                // Remove iframe and continue to next routine when done:
                $('#iframe-o').remove();
                continue_routine = false;
            });
        });
    });
    //$('#iframe').attr( 'src', function(i,val){ return val;} );
    // keep track of which components have finished
    consent_2Components = [];
    consent_2Components.push(loading_3);
    
    for (const thisComponent of consent_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_2' ---
    // get current time
    t = consent_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *loading_3* updates
    if (t >= 0.0 && loading_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      loading_3.tStart = t;  // (not accounting for frame time here)
      loading_3.frameNStart = frameN;  // exact frame index
      
      loading_3.setAutoDraw(true);
    }

    continueRoutine = continue_routine;
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_2' ---
    for (const thisComponent of consent_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // expInfo variables appear on every line in the data file
    // after they are created.
    expInfo['date2'] = psychoJS.experiment._currentTrialData['Qdate2'];
    expInfo['conformation2_1'] = psychoJS.experiment._currentTrialData['Qconformation2_1'];
    continueRoutine = false;
    // the Routine "consent_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consent_end_2Components;
function consent_end_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_end_2' ---
    t = 0;
    consent_end_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from skip_offline_6
    continueRoutine = false;
    
    // keep track of which components have finished
    consent_end_2Components = [];
    
    for (const thisComponent of consent_end_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_end_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_end_2' ---
    // get current time
    t = consent_end_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_end_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_end_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_end_2' ---
    for (const thisComponent of consent_end_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "consent_end_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ThankyouComponents;
function ThankyouRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Thankyou' ---
    t = 0;
    ThankyouClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    ThankyouComponents = [];
    ThankyouComponents.push(text_7);
    
    for (const thisComponent of ThankyouComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ThankyouRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Thankyou' ---
    // get current time
    t = ThankyouClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ThankyouComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ThankyouRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Thankyou' ---
    for (const thisComponent of ThankyouComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(text_15);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_15.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
