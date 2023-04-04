import Config from "../include/config.js";
import w1k from "../../static/words/w1k.js";
import w3k from "../../static/words/w3k.js";

import * as Const from "../include/constant.js";
import * as ConfigHandler from "../handler/confighandler.js";
import * as MiscElement from "../HTMLElement/MiscElement.js";
import * as SettingElement from "../HTMLElement/SettingElement.js";
import * as TestAreaElement from "../HTMLElement/TestAreaElement.js";
import config from "../include/config.js";

export function isspace(letter) {
  return letter?.textContent.charCodeAt(0) === Config.whitespace.code;
}

export function NodeList(cssQueryString) {
  return document.querySelectorAll(cssQueryString);
}

export function HTMLCollection(name, option) {
  if ( option?.tagname ) {
    return document.getElementsByTagName(name);
  } else if ( option?.classname ) {
    return document.getElementsByClassName(name);
  } else {
    console.error("wrong option provided to get HTMLCollection (only classname/tagname is valid)");
  }
}

export function totalchar() {
  let cnt = 0;
  Array.from(HTMLCollection("word", { tagname: true })).forEach((word) => {
    cnt += word?.children.length;
  });
  return cnt;
}

export function showspeed(lettercount, time) {
  const wpm = ((lettercount / 5) / (time)) * 60;
  MiscElement.speed.style.color = "deeppink";
  MiscElement.speed.textContent = `${Math.ceil(wpm)}wpm`;
  setTimeout(() => {
    MiscElement.speed.style.color = "lightgray";
  }, 2500);
}

export function randomwords() {
  let words = new Array(Config.sentence.word.count);
  for (let i = 0; i < Config.sentence.word.count; ++i) {
    words[i] = w1k[Math.floor(Math.random() * w1k.length)];
    // words[i] = w3k[Math.floor(Math.random() * w3k.length)];
  }
  return words;
}

export function wordelements(s) {  

  let wordarray = new Array();
  let word, letter;

  for (let i = 0; i < s.length; ++i) {

    // create a word which has no letter which contains
    word = document.createElement("word");
    for (let j = 0; j < s[i].length; ++j) {
      letter = document.createElement("letter");
      letter.textContent = s[i][j];
      letter.classList.add(Config.caret.type);
      word.appendChild(letter);
    }
    wordarray.push(word);

    if ( !Config.endtestwithspace && (i === s.length - 1) ) return wordarray;

    // create a word which will only contain a letter with whitespace in it
    word = document.createElement("word");
    letter = document.createElement("letter");
    letter.classList.add("whitespace");
    letter.classList.add(Config.caret.type);

    if ( Config.whitespace.type === SettingElement.whitespace.space.dataset.type ) {  
      letter.innerHTML = `${Config.whitespace.character}`;
    } else if ( Config.whitespace.type === SettingElement.whitespace.dot.dataset.type ) {
      letter.innerHTML = `<span id="wdot">${Config.whitespace.character}</span>`;
    } else {
      letter.innerHTML = "";
    }
    
    word.appendChild(letter);
    wordarray.push(word);
  }

  return wordarray;
}

export function getsentence() {
	let s = "", ws_code = 0;
  let words = HTMLCollection("word", { tagname: true });
	for ( let word of words ) {
		let letters = word.children;
		for ( let letter of letters ) {
      ws_code = letter.textContent.charCodeAt(0);
			if ( ws_code === 160 || ws_code === 11825 || ws_code === 9251 ) {
				s += " ";
			} else {
				s += letter.textContent;
			}
		}
	}
  return s;
}

export function lettertagtext(letter) {
  const ws_code = letter.textContent.charCodeAt(0);
  if ( ws_code === 160 || ws_code === 11825 || ws_code === 9251 ) return " ";
  return letter.textContent;
}

export function wordtagtext(word) {
  let ws_code = 0, text = new String();
  for ( const letter of word.children ) {
    ws_code = letter.textContent.charCodeAt(0);
    if ( ws_code === 160 || ws_code === 11825 || ws_code === 9251 ) {
      text += " ";
    } else {
      text += letter.textContent;
    }
  }
  return text;
}

export function validsentence(sentence) {
  // sentence type must be object i.e, array and it should not be empty,
  // every string should be in <word></word> tag and every character should
  // be in <letter></letter> tag and no letter tag must contain more than
  // one character
  const validtype = typeof(sentence) === "object";
  const notempty = sentence.length > 0;
  const validwordtags = sentence.every((word) => word.tagName === "WORD");
  const validlettertags = sentence.every((word) => {
    return Array.from(word?.children).every((letter) => {
      return letter.tagName === "LETTER" && letter.textContent.length === 1;
    });
  });
  if (validtype && notempty && validwordtags && validlettertags) return true;
  return false;
}

export function automatetyping(keystroke_time) {
	let id, i = 0;
	let s = getsentence();

	id = setInterval(() => {
		TestAreaElement.input.dispatchEvent(new KeyboardEvent("keydown", {key: s[i]}));
		TestAreaElement.input.value += s[i];
		++i;
		if ( i == s.length - 1 ) clearInterval(id);
	}, keystroke_time);	
}

export function deviceinformation() {
  let s = navigator.userAgent;
  return { os: "", devicetype: "" };
}

export function tolower(letter) { // Lowercase: 0'11'?????
  return String.fromCharCode(letter.charCodeAt(0) | (1 << 5));
}

export function toupper(letter) { // Uppercase: 0'10'?????
  return String.fromCharCode(letter.charCodeAt(0) & (~(1 << 5)));
}

export function binaryof(value) {
  return Number(value).toString(2);
}

export const computedstyles = getComputedStyle(MiscElement.root);

export function storeConfigInLocalStorage() {
  window.localStorage.setItem('Config', JSON.stringify(Config));
}

export function loadconfig(c) {
  if ( typeof(c) !== 'object' ) return;

  Config.ttypist.istyping = c.ttypist.istyping;
  Config.ttypist.deviceinformation = c.ttypist.deviceinformation;
  
  Config.capslock = c.capslock;
  Config.outoffocus = c.outoffocus;
  Config.livestats = c.livestats;
  Config.inputvisible = c.inputvisible;
  Config.endtestwithspace = c.endtestwithspace;
  Config.oppositeshift = c.oppositeshift;

  Config.caret.off = c.caret.off;
  Config.caret.type = c.caret.type;

  Config.fliptextcolor = c.fliptextcolor;
  Config.highlight.off = c.highlight.off;
  Config.highlight.mode.word = c.highlight.mode.word;
  Config.highlight.mode.letter = c.highlight.mode.letter;

  Config.backspace.off = c.backspace.off;
  Config.backspace.modifier.alt = c.backspace.modifier.alt;
  Config.backspace.modifier.ctrl = c.backspace.modifier.ctrl;
  Config.backspace.modifier.meta = c.backspace.modifier.meta;

  Config.confidence.off = c.confidence.off;
  Config.confidence.mode.pro = c.confidence.mode.pro;
  Config.confidence.mode.max = c.confidence.mode.max;

  Config.whitespace.off = c.whitespace.off;
  Config.whitespace.type = c.whitespace.type;
  Config.whitespace.code = c.whitespace.code;
  Config.whitespace.character = c.whitespace.character;
}