import { config } from "../../include/config.js";
import * as CaretController from "../controllers/caret-controller.js";
import * as TypingAreaElements from "../elements/typing-area-element.js";
import * as Misc from "../utils/misc.js";
import { time, typedchar, mInput, user } from "../../include/trackers.js";
import { Test, text, word } from "../main.js";

let wasSpace = false;
mInput.keydownUnidentified = true;

export function keydown(evt) {}
export function keypress(evt) {}
export function beforeinput(evt) {}
export function input(evt) {}
export function keyup(evt) {}

// 1. keydown
export function registerkeydown(evt) {

	if ( !evt.isTrusted ) return;

	if ( (evt.key === "Unidentified") || (evt.code === "") ) {
		mInput.keydownUnidentified = true;
		return;
	}

	if ( !user.istyping ) {
		time.begin = performance.now();
		user.istyping = true; 
	}

	typedchar.reset();
  typedchar.value = evt.key;
	
	if ( (Misc.isspace(word.activeletter)) && (typedchar.value === " ") ) { // space is typed

		word.activeletter.classList.add("correct");
		
		if ( !config.text.highlight.isflipped ) {
			word.activeletter.classList.remove("ws-active");
		} else {
			word.activeletter.classList.add("ws-active");
		}
		
		wasSpace = true;
		
		CaretController.removeCaretFrom(word.activeletter);

		if ( config.text.underline && (text.activewordindex > 0) ) {
			removeunderline(text.prevword);
			text.incrementwordindex();
		}

		word.loadword(text.nextword, { nextword: true });
		
		if ( config.text.underline ) {
			addunderline(word.me());
		}
		CaretController.addCaretTo(word.activeletter);
		
	} else if ( typedchar.value === word.activeletter.textContent ) { // correct char is typed

		CaretController.removeCaretFrom(word.activeletter);
		word.activeletter.classList.add("correct");

		if ( config.text.underline ) {
			word.activeletter.style["text-decoration-color"] = "var(--text-secondary-color)";
		}

		if ( word.activeletterindex < word.lastletterindex ) {
			CaretController.addCaretTo(word.nextletter);
		} else {

			// load next word
			if ( word.activeletterindex === word.lastletterindex ) {

				if ( text.activewordindex < text.lastwordindex ) {
					word.loadword(text.nextword, { nextword: true });
					CaretController.addCaretTo(word.activeletter);
				}	

				if ( !config.text.highlight.isflipped ) { 
					word.activeletter.classList.add("ws-active");
				}

				// test complete
				if ( text.activewordindex === text.lastwordindex ) {
					time.end = window.performance.now();
					user.hastypedallwords = true;
					return;
				}
			}	
		}
	} else if ( typedchar.value === "Backspace" ) { // deletion

		// caret is on first letter of first word, so no deletion
		if ( word.activeletterindex === 0 && text.activewordindex === 0 ) return;

		if ( evt.metaKey ) { // cmd/win + backspace

			CaretController.removeCaretFrom(word.activeletter);
			text.resetwordindex();
			word.loadword(text.activeword, { activeword: true });
			CaretController.addCaretTo(word.activeletter);

		} else if ( evt.altKey || evt.ctrlKey ) { // alt/opt + backspace

			for ( const letter of text.activeword.children ) {
				letter.classList.remove("correct");
				letter.style["text-decoration-color"] = "var(--text-primary-color)";
			}

			if ( word.activeletterindex === 0 && text.activewordindex > 0 ) {

				removeunderline(text.activeword);
				
				if ( Misc.isspace(text.word_at(text.activewordindex - 1).children[0])) {
					text.word_at(text.activewordindex - 1).children[0].classList.remove("correct");
					text.decrementwordindex();
				}

				CaretController.removeCaretFrom(word.activeletter);
				word.activeletter.classList.remove("correct");
				word.loadword(text.prevword, { prevword: true });
				addunderline(text.activeword);
				CaretController.addCaretTo(word.activeletter);
				
				for ( const letter of text.activeword.children ) {
					letter.classList.remove("correct");
					letter.style["text-decoration-color"] = "var(--text-primary-color)";
				}
			}

			// delete all typed letters of the active word and put caret to first letter
			CaretController.removeCaretFrom(word.activeletter);
			word.resetletterindex();
			CaretController.addCaretTo(word.activeletter);

		} else { // backspace

			if ( word.activeletterindex > 0 ) {

				word.activeletter.classList.remove("correct");
				if ( config.text.underline ) {
					word.activeletter.style["text-decoration-color"] = "var(--text-primary-color)";
				}
				CaretController.removeCaretFrom(word.activeletter);
				CaretController.addCaretTo(word.prevletter);

				word.activeletter.classList.remove("correct");
				if ( config.text.underline ) {
					word.activeletter.style["text-decoration-color"] = "var(--text-primary-color)";
				}
				
			} else if ( word.activeletterindex === 0 && text.activewordindex > 0 ) {

				CaretController.removeCaretFrom(word.activeletter);
				removeunderline(text.activeword);
				word.loadword(text.prevword, { prevword: true });
				
				if ( config.text.underline && (text.activewordindex > 0) && Misc.isspace(word.activeletter)) {
					text.decrementwordindex();
					addunderline(text.activeword);
					text.incrementwordindex();
				}
				word.activeletter.classList.remove("correct");
				if ( config.text.underline ) {
					word.activeletter.style["text-decoration-color"] = "var(--text-primary-color)";
				}
				CaretController.addCaretTo(word.activeletter);
			}
		}
	} else { // error handling
		if ( config.error.skip && typedchar.value === " " && word.activeletterindex != 0) {
			CaretController.removeCaretFrom(word.activeletter);
			removeunderline(word.me());

			word.loadword(text.nextword, { nextword: true });
			word.loadword(text.nextword, { nextword: true });
			
			if ( config.text.underline ) {
				addunderline(text.activeword);
			}
			CaretController.addCaretTo(word.activeletter);	
		}
	}
}

// 2. keypress
export function registerkeypress(evt) {
	if ( !evt.isTrusted ) return;
}

// 3. beforeinput
export function registerbeforeinput(evt) {
	if ( !evt.isTrusted ) return;
}

// 4. input
export function registerinput(evt) {
	if ( !evt.isTrusted ) return;

	if ( mInput.keydownUnidentified ) {
		
		TypingAreaElements.textInputField.focus();

		if ( !config.user.istyping ) {
			time.begin = performance.now();
			config.user.istyping = true;
		}

		if ( evt.data !== null ) mInput.data = evt.data[evt.data.length - 1];

		if ( mInput.data === " " && Misc.isspace(word.activeletter) ) { // space is typed

			TypingAreaElements.textInputField.value = "";
			
			CaretController.removeCaretFrom(word.activeletter);
			word.loadword(text.nextword, { nextword: true });
			CaretController.addCaretTo(word.activeletter);
			
		} else if ( mInput.data === word.activeletter.textContent ) { // correct char is typed
			
			CaretController.removeCaretFrom(word.activeletter);
	
			if ( word.activeletterindex < word.lastletterindex ) {
				CaretController.addCaretTo(word.nextletter);
			} else {
	
				if ( word.activeletterindex === word.lastletterindex ) {
					if ( text.activewordindex < text.lastwordindex ) { // load next word
						word.loadword(text.nextword, { nextword: true });
						CaretController.addCaretTo(word.activeletter);
					}	
	
					if ( text.activewordindex === text.lastwordindex ) { // test complete
						time.end = window.performance.now();
						Test.restart();
					}
				}	
			}
		}
	}
	mInput.reset();
}

// 5. keyup
export function registerkeyup(evt) {

	if ( !evt.isTrusted ) return;

	if ( wasSpace ) {
		TypingAreaElements.textInputField.value = "";
		wasSpace = false;
	}

	if ( user.hastypedallwords ) {
		TypingAreaElements.textInputField.blur();
		CaretController.removeCaretFrom(word.activeletter);
		console.log(((Misc.totalchar() / 5) / (time.duration / 1000)) * 60);
		Test.restart();
	}
}

export function removeunderline(word) {
	for ( const letter of word.children ) {
		letter.classList.remove("underline");
	}
}

export function addunderline(word) {
	for (const letter of word.children ) {	
		letter.classList.add("underline");
	}
}

// setTimeout(() => {
// 	Misc.autotyper(200);
// }, 3000);

export { text, word };