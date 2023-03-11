import * as Constants from "./constants.js";

const config = {
  
  startedtyping: false,
  
  timer: true, // live timer for timed tests

  warning: {
    capslock: false,
    outoffocus: false,
  },

  endwith_space: false,

  // use opposite shift keys for shifting, using an incorrect one will count as
  // an error, ignore B, Y, ^
  oppositeshift: false,

  highlight: "word", // off | letter | word
  fliptextcolor: false, // brightness of typed texts and upcoming future texts

  // difficulty:
  //    - easy is the classic type test experience
  //    - medium fails the test if user submits an incorrect word
  //    - hard fails the test if user hit a single incorrect key
  difficulty: "easy", // easy | medium | hard

  // if enabled, allow user to delete any word, even if it was typed correctly
  backspace: true, // backspace | opt/alt/ctrl + backspace | meta + backspace

  error: {
    forgive: true,
    insert: false,
    stop: false, // stop on error (there will be different behaviour for letter & word mode)
  },

  caret: {
    type: "line", // off, line, underline, box, block
    blink: true, 
    smooth: false,
  },
  
  sentence: {
    whitespace: Constants.whitespace.space, // space/dot
    word: {
      length: "mix", // small(<5) | medium(>5, <8) | long(>8) | mix
      count: 15,
    },
    include: {
      digits: false, // include digits along with words
      punctuations: false, // include punctuation marks along with words
    },
    font: {
      size: "1.4rem",
      weight: "400",
      family: "Roboto Mono, monospace",
    },
  },
  live: {
    stats: false, // show wpm/cpm and accuracy on every keystroke
    keyboard: true, // static, react, next
  },
  keyboard: {
    layout: "qwerty", // keyboard layout
    language: "english",

    // evt.code tells us which physcial key is pressed
    // keyboard layouts like qwerty, dvorak has different layouts for keys on the physical keyboard
    // if emulate is enabled then you need to map evt.code with evt.key for layout choosen
    // i don't know how to explain it right now but i have understood it subconsciously
    emulate: false, 
  },
  sound: {
    play: "off", // off, nk creams, typewriter, hitmarker
    onerror: false, // play sound on error
  },
  practice: {
    customtext: false, // custom text provided by user
    guidedlessions: false,
    alphanumeric: false, // ascii characters only

    numrow: false, // number row digits and symbols
    numpad: false, // number pad digits and arithmetic operations with expression
    
    brackets: false, // {[()]}
    arrowkeys: false, // ArrowUp, ArrowLeft, ArrowRight, ArrowDown, KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
    functionkeys: false, // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12
    specialsymbols: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
  },
};

export default config;