import { config } from "../../include/config.js"
import * as SettingsElement from "../elements/setting-element.js";

// keyboard reaction
export function changeKeyboardReactionInUI(value) {
	if ( value === "next" ) {
		SettingsElement.UIKeyboardReactionConfig.off.id = "";
		SettingsElement.UIKeyboardReactionConfig.static.id = "";
		SettingsElement.UIKeyboardReactionConfig.react.id = "";
		SettingsElement.UIKeyboardReactionConfig.next.id = "selected";
	} else if ( value === "static" ) {
		SettingsElement.UIKeyboardReactionConfig.off.id = "";
		SettingsElement.UIKeyboardReactionConfig.static.id = "selected";
		SettingsElement.UIKeyboardReactionConfig.react.id = "";
		SettingsElement.UIKeyboardReactionConfig.next.id = "";
	} else if ( value === "react" ) {
		SettingsElement.UIKeyboardReactionConfig.off.id = "";
		SettingsElement.UIKeyboardReactionConfig.static.id = "";
		SettingsElement.UIKeyboardReactionConfig.react.id = "selected";
		SettingsElement.UIKeyboardReactionConfig.next.id = "";
	} else {
		SettingsElement.UIKeyboardReactionConfig.off.id = "selected";
		SettingsElement.UIKeyboardReactionConfig.static.id = "";
		SettingsElement.UIKeyboardReactionConfig.react.id = "";
		SettingsElement.UIKeyboardReactionConfig.next.id = "";
	}
}

// emulate keyboard
export function changeKeyboardLayoutEmulateInUI(value) {
	if ( value === "on" ) {
		SettingsElement.UIKeyboardLayoutEmulateConfig.off.id = "";
		SettingsElement.UIKeyboardLayoutEmulateConfig.on.id = "selected";
	}	else {
		SettingsElement.UIKeyboardLayoutEmulateConfig.off.id = "selected";
		SettingsElement.UIKeyboardLayoutEmulateConfig.on.id = "";
	}
}

// tape mode
export function changeTapeModeInUI(value) {
	if ( value === "letter" ) {
		SettingsElement.tapeModeConfig.off.id = "";
		SettingsElement.tapeModeConfig.mode.letter.id = "selected";
		SettingsElement.tapeModeConfig.mode.word.id = "";
	} else if ( value === "word" ) {
		SettingsElement.tapeModeConfig.off.id = "";
		SettingsElement.tapeModeConfig.mode.letter.id = "";
		SettingsElement.tapeModeConfig.mode.word.id = "selected";
	} else {
		SettingsElement.tapeModeConfig.off.id = "selected";
		SettingsElement.tapeModeConfig.mode.letter.id = "";
		SettingsElement.tapeModeConfig.mode.word.id = "";
	}
}

// text input
export function changeTextInputInUI(value) {
	if ( value === "visible" ) {
		SettingsElement.textInput.hidden.id = "";
		SettingsElement.textInput.visible.id = "selected";
	} else {
		SettingsElement.textInput.hidden.id = "selected";
		SettingsElement.textInput.visible.id = "";
	}
}

// text highlight
export function changeTextHightlightInUI(value) {
	if ( value === "word" ) {
		SettingsElement.textHighlight.off.id = "";
		SettingsElement.textHighlight.mode.letter.id = "";
		SettingsElement.textHighlight.mode.word.id = "selected";
	} else if ( value === "letter" ) {		
		SettingsElement.textHighlight.off.id = "";
		SettingsElement.textHighlight.mode.letter.id = "selected";
		SettingsElement.textHighlight.mode.word.id = "";
	} else {
		SettingsElement.textHighlight.off.id = "selected";
		SettingsElement.textHighlight.mode.letter.id = "";
		SettingsElement.textHighlight.mode.word.id = "";
	}
}

// flip text highlight
export function changeFlipTextHightlightInUI(value) {

	if ( value === "on" ) {
		SettingsElement.textHighlight.flip.off.id = "";
		SettingsElement.textHighlight.flip.on.id = "selected";
	} else {
		SettingsElement.textHighlight.flip.off.id = "selected";
		SettingsElement.textHighlight.flip.on.id = "";
	}
}

// text underline
export function changeTextUnderlineInUI(value) {
	if ( value === "off" ) 	{
		SettingsElement.textUnderline.off.id = "selected";
		SettingsElement.textUnderline.on.id = "";
	} else {
		SettingsElement.textUnderline.off.id = "";
		SettingsElement.textUnderline.on.id = "selected";
	}
}

// text whitespace
export function changeTextWhitespaceInUI(value) {
	if ( value === "bullet" ) {
		SettingsElement.textWhitespace.off.id = "";
		SettingsElement.textWhitespace.type.bullet.id = "selected";
		SettingsElement.textWhitespace.type.space.id = "";
		SettingsElement.textWhitespace.type.bar.id = "";
	} else if ( value === "bar" ) {
		SettingsElement.textWhitespace.off.id = "";
		SettingsElement.textWhitespace.type.bullet.id = "";
		SettingsElement.textWhitespace.type.space.id = "";
		SettingsElement.textWhitespace.type.bar.id = "selected";
	} else if ( value === "space" ) {
		SettingsElement.textWhitespace.off.id = "";
		SettingsElement.textWhitespace.type.bullet.id = "";
		SettingsElement.textWhitespace.type.space.id = "selected";
		SettingsElement.textWhitespace.type.bar.id = "";
	} else {
		SettingsElement.textWhitespace.off.id = "selected";
		SettingsElement.textWhitespace.type.bullet.id = "";
		SettingsElement.textWhitespace.type.space.id = "";
		SettingsElement.textWhitespace.type.bar.id = "";
	}
}

// strict space
export function changeStrictSpaceInUI(value) {
	if ( value === "off" ) {
		SettingsElement.strictspace.off.id = "selected";
		SettingsElement.strictspace.on.id = "";
	} else {
		SettingsElement.strictspace.off.id = "";
		SettingsElement.strictspace.on.id = "selected";
	}	
}

// quick end
export function changeQuickEndInUI(value) {
	if ( value === "off" ) {
		SettingsElement.quickend.off.id = "selected";
		SettingsElement.quickend.on.id = "";
	} else {
		SettingsElement.quickend.off.id = "";
		SettingsElement.quickend.on.id = "selected";
	}
}

// test difficulty
export function changeDifficultyInUI(value) {
	if ( value === "expert" ) {
		SettingsElement.difficulty.ease.id = "";
		SettingsElement.difficulty.expert.id = "selected";
		SettingsElement.difficulty.master.id = "";
	} else if ( value === "master" ) {
		SettingsElement.difficulty.ease.id = "";
		SettingsElement.difficulty.expert.id = "";
		SettingsElement.difficulty.master.id = "selected";
	} else {
		SettingsElement.difficulty.ease.id = "selected";
		SettingsElement.difficulty.expert.id = "";
		SettingsElement.difficulty.master.id = "";
	}
}

// confidence
export function changeConfidenceInUI(value) {
	if ( value === "high" ) {
		SettingsElement.confidence.low.id = "";
		SettingsElement.confidence.high.id = "selected";
		SettingsElement.confidence.peak.id = "";
	}	else if ( value === "peak" ) {
		SettingsElement.confidence.low.id = "";
		SettingsElement.confidence.high.id = "";
		SettingsElement.confidence.peak.id = "selected";
	} else {
		SettingsElement.confidence.low.id = "selected";
		SettingsElement.confidence.high.id = "";
		SettingsElement.confidence.peak.id = "";
	}
}

// delete text (backspace)
export function changeTextDeletionInUI(value) {
	if ( value === "off" ) {
		SettingsElement.deletionConfig.off.id = "selected";
		SettingsElement.deletionConfig.on.id = "";
	}	else {
		SettingsElement.deletionConfig.off.id = "";
		SettingsElement.deletionConfig.on.id = "selected";
	}
}

// delete correct previous word
export function changeDeleteCorrectPreviousWordInUI(value) {
	if ( value === "off" ) {
		SettingsElement.delcorrectConfig.off.id = "selected";
		SettingsElement.delcorrectConfig.on.id = "";
	}	else {
		SettingsElement.delcorrectConfig.off.id = "";
		SettingsElement.delcorrectConfig.on.id = "selected";
	}
}

// error
export function changeErrorInUI(value) {
	if ( value === "skip" ) {
		SettingsElement.errorHandlingConfig.off.id = "";
		SettingsElement.errorHandlingConfig.insert.id = "";
		SettingsElement.errorHandlingConfig.skip.id = "selected";
		SettingsElement.errorHandlingConfig.replace.id = "";
	} else if ( value === "replace" ) {
		SettingsElement.errorHandlingConfig.off.id = "";
		SettingsElement.errorHandlingConfig.insert.id = "";
		SettingsElement.errorHandlingConfig.skip.id = "";
		SettingsElement.errorHandlingConfig.replace.id = "selected";
	} else if ( value === "insert" ) {
		SettingsElement.errorHandlingConfig.off.id = "";
		SettingsElement.errorHandlingConfig.insert.id = "selected";
		SettingsElement.errorHandlingConfig.skip.id = "";
		SettingsElement.errorHandlingConfig.replace.id = "";
	} else {
		SettingsElement.errorHandlingConfig.off.id = "selected";
		SettingsElement.errorHandlingConfig.insert.id = "";
		SettingsElement.errorHandlingConfig.skip.id = "";
		SettingsElement.errorHandlingConfig.replace.id = "";
	}
}

// forgive error
export function changeForgiveErrorInUI(value) {
	if ( value === "on" ) {
		SettingsElement.errorHandlingConfig.forgive.off.id = "";
		SettingsElement.errorHandlingConfig.forgive.on.id = "selected";
	} else {
		SettingsElement.errorHandlingConfig.forgive.off.id = "selected";
		SettingsElement.errorHandlingConfig.forgive.on.id = "";
	}
}

// stop on error
export function changeStopOnErrorInUI(value) {
	if ( value === "letter" ) {
		SettingsElement.errorHandlingConfig.stop.off.id = "";
		SettingsElement.errorHandlingConfig.stop.letter.id = "selected";
		SettingsElement.errorHandlingConfig.stop.word.id = "";
	} else if ( value === "word" ) {
		SettingsElement.errorHandlingConfig.stop.off.id = "";
		SettingsElement.errorHandlingConfig.stop.letter.id = "";
		SettingsElement.errorHandlingConfig.stop.word.id = "selected";
	} else {
		SettingsElement.errorHandlingConfig.stop.off.id = "selected";
		SettingsElement.errorHandlingConfig.stop.letter.id = "";
		SettingsElement.errorHandlingConfig.stop.word.id = "";
	}
}

// opposite shift mode
export function changeOppositeShiftModeInUI(value) {
	if ( value === "on" ) {
		SettingsElement.useOppositeShiftConfig.off.id = "";
		SettingsElement.useOppositeShiftConfig.on.id = "selected";
	} else {
		SettingsElement.useOppositeShiftConfig.off.id = "selected";
		SettingsElement.useOppositeShiftConfig.on.id = "";
	}
}

// minimum speed
export function changeMinimumSpeedInUI(value) {
	if ( value === "on" ) {
		SettingsElement.minimumThresholdConfig.speed.off.id = "";
		SettingsElement.minimumThresholdConfig.speed.on.id = "selected";
	} else {
		SettingsElement.minimumThresholdConfig.speed.off.id = "selected";
		SettingsElement.minimumThresholdConfig.speed.on.id = "";
	}
}

// minimum accuracy
export function changeMinimumAccuracyInUI(value) {
	if ( value === "on" ) {
		SettingsElement.minimumThresholdConfig.accuracy.off.id = "";
		SettingsElement.minimumThresholdConfig.accuracy.on.id = "selected";
	} else {
		SettingsElement.minimumThresholdConfig.accuracy.off.id = "selected";
		SettingsElement.minimumThresholdConfig.accuracy.on.id = "";
	}
}

// minimum burst
export function changeMinimumBurstInUI(value) {
	if ( value === "fixed" ) {
		SettingsElement.minimumThresholdConfig.burst.off.id = "";
		SettingsElement.minimumThresholdConfig.burst.option.fixed.id = "selected";
		SettingsElement.minimumThresholdConfig.burst.option.flex.id = "";
	} else if ( value === "flex") {
		SettingsElement.minimumThresholdConfig.burst.off.id = "";
		SettingsElement.minimumThresholdConfig.burst.option.fixed.id = "";
		SettingsElement.minimumThresholdConfig.burst.option.flex.id = "selected";
	} else {
		SettingsElement.minimumThresholdConfig.burst.off.id = "selected";
		SettingsElement.minimumThresholdConfig.burst.option.fixed.id = "";
		SettingsElement.minimumThresholdConfig.burst.option.flex.id = "";
	}
}

// text word count
export function changeTextWordCountInUI(value) {
	if ( value === "custom" ) { // -2 (custom)
		SettingsElement.textWordsCountConfig.off.id = "";
		SettingsElement.textWordsCountConfig.words10.id = "";
		SettingsElement.textWordsCountConfig.words25.id = "";
		SettingsElement.textWordsCountConfig.words50.id = "";
		SettingsElement.textWordsCountConfig.words100.id = "";
		SettingsElement.textWordsCountConfig.customWordsCountButton.id = "selected";
	} else if ( value === "off" ) { // -1 (off)
		SettingsElement.textWordsCountConfig.off.id = "selected";
		SettingsElement.textWordsCountConfig.words10.id = "";
		SettingsElement.textWordsCountConfig.words25.id = "";
		SettingsElement.textWordsCountConfig.words50.id = "";
		SettingsElement.textWordsCountConfig.words100.id = "";
		SettingsElement.textWordsCountConfig.customWordsCountButton.id = "";
	} else if ( value === "10" ) {
		SettingsElement.textWordsCountConfig.off.id = "";
		SettingsElement.textWordsCountConfig.words10.id = "selected";
		SettingsElement.textWordsCountConfig.words25.id = "";
		SettingsElement.textWordsCountConfig.words50.id = "";
		SettingsElement.textWordsCountConfig.words100.id = "";
		SettingsElement.textWordsCountConfig.customWordsCountButton.id = "";
	}	else if ( value === "25" ) {
		SettingsElement.textWordsCountConfig.off.id = "";
		SettingsElement.textWordsCountConfig.words10.id = "";
		SettingsElement.textWordsCountConfig.words25.id = "selected";
		SettingsElement.textWordsCountConfig.words50.id = "";
		SettingsElement.textWordsCountConfig.words100.id = "";
		SettingsElement.textWordsCountConfig.customWordsCountButton.id = "";
	} else if ( value === "50" ) {
		SettingsElement.textWordsCountConfig.off.id = "";
		SettingsElement.textWordsCountConfig.words10.id = "";
		SettingsElement.textWordsCountConfig.words25.id = "";
		SettingsElement.textWordsCountConfig.words50.id = "selected";
		SettingsElement.textWordsCountConfig.words100.id = "";
		SettingsElement.textWordsCountConfig.customWordsCountButton.id = "";
	} else if ( value === "100" ) {
		SettingsElement.textWordsCountConfig.off.id = "";
		SettingsElement.textWordsCountConfig.words10.id = "";
		SettingsElement.textWordsCountConfig.words25.id = "";
		SettingsElement.textWordsCountConfig.words50.id = "";
		SettingsElement.textWordsCountConfig.words100.id = "selected";
		SettingsElement.textWordsCountConfig.customWordsCountButton.id = "";
	}
}

// timer time
export function changeTimerSecondsInUI(value) {
	if ( value === "custom" ) { // -2 (custom)
		SettingsElement.timerSecondsCountConfig.off.id = "";
		SettingsElement.timerSecondsCountConfig.seconds15.id = "";
		SettingsElement.timerSecondsCountConfig.seconds30.id = "";
		SettingsElement.timerSecondsCountConfig.seconds60.id = "";
		SettingsElement.timerSecondsCountConfig.seconds120.id = "";
		SettingsElement.timerSecondsCountConfig.customSecondsCountButton.id = "selected";
	} else if ( value === "off" ) { // -1 (off)
		SettingsElement.timerSecondsCountConfig.off.id = "selected";
		SettingsElement.timerSecondsCountConfig.seconds15.id = "";
		SettingsElement.timerSecondsCountConfig.seconds30.id = "";
		SettingsElement.timerSecondsCountConfig.seconds60.id = "";
		SettingsElement.timerSecondsCountConfig.seconds120.id = "";
		SettingsElement.timerSecondsCountConfig.customSecondsCountButton.id = "";
	} else if ( value === "15" ) {
		SettingsElement.timerSecondsCountConfig.off.id = "";
		SettingsElement.timerSecondsCountConfig.seconds15.id = "selected";
		SettingsElement.timerSecondsCountConfig.seconds30.id = "";
		SettingsElement.timerSecondsCountConfig.seconds60.id = "";
		SettingsElement.timerSecondsCountConfig.seconds120.id = "";
		SettingsElement.timerSecondsCountConfig.customSecondsCountButton.id = "";
	}	else if ( value === "30" ) {
		SettingsElement.timerSecondsCountConfig.off.id = "";
		SettingsElement.timerSecondsCountConfig.seconds15.id = "";
		SettingsElement.timerSecondsCountConfig.seconds30.id = "selected";
		SettingsElement.timerSecondsCountConfig.seconds60.id = "";
		SettingsElement.timerSecondsCountConfig.seconds120.id = "";
		SettingsElement.timerSecondsCountConfig.customSecondsCountButton.id = "";
	} else if ( value === "60" ) {
		SettingsElement.timerSecondsCountConfig.off.id = "";
		SettingsElement.timerSecondsCountConfig.seconds15.id = "";
		SettingsElement.timerSecondsCountConfig.seconds30.id = "";
		SettingsElement.timerSecondsCountConfig.seconds60.id = "selected";
		SettingsElement.timerSecondsCountConfig.seconds120.id = "";
		SettingsElement.timerSecondsCountConfig.customSecondsCountButton.id = "";
	} else if ( value === "120" ) {
		SettingsElement.timerSecondsCountConfig.off.id = "";
		SettingsElement.timerSecondsCountConfig.seconds15.id = "";
		SettingsElement.timerSecondsCountConfig.seconds30.id = "";
		SettingsElement.timerSecondsCountConfig.seconds60.id = "";
		SettingsElement.timerSecondsCountConfig.seconds120.id = "selected";
		SettingsElement.timerSecondsCountConfig.customSecondsCountButton.id = "";
	}
}

export function changePaceCaretSpeedInUI(value) {
	if ( value === "last" ) {
		SettingsElement.paceCaretSpeedConfig.off.id = "";
		SettingsElement.paceCaretSpeedConfig.last.id = "selected";
		SettingsElement.paceCaretSpeedConfig.average.id = "";
		SettingsElement.paceCaretSpeedConfig.best.id = "";
		SettingsElement.paceCaretSpeedConfig.paceCaretCustomSpeedButton.id = "";
	}	else if ( value === "average" ) {
		SettingsElement.paceCaretSpeedConfig.off.id = "";
		SettingsElement.paceCaretSpeedConfig.last.id = "";
		SettingsElement.paceCaretSpeedConfig.average.id = "selected";
		SettingsElement.paceCaretSpeedConfig.best.id = "";
		SettingsElement.paceCaretSpeedConfig.paceCaretCustomSpeedButton.id = "";
	} else if ( value === "best" ) {
		SettingsElement.paceCaretSpeedConfig.off.id = "";
		SettingsElement.paceCaretSpeedConfig.last.id = "";
		SettingsElement.paceCaretSpeedConfig.average.id = "";
		SettingsElement.paceCaretSpeedConfig.best.id = "selected";
		SettingsElement.paceCaretSpeedConfig.paceCaretCustomSpeedButton.id = "";
	} else if ( value === "custom" ) {
		SettingsElement.paceCaretSpeedConfig.off.id = "";
		SettingsElement.paceCaretSpeedConfig.last.id = "";
		SettingsElement.paceCaretSpeedConfig.average.id = "";
		SettingsElement.paceCaretSpeedConfig.best.id = "";
		SettingsElement.paceCaretSpeedConfig.paceCaretCustomSpeedButton.id = "selected";
	} else {
		SettingsElement.paceCaretSpeedConfig.off.id = "selected";
		SettingsElement.paceCaretSpeedConfig.last.id = "";
		SettingsElement.paceCaretSpeedConfig.average.id = "";
		SettingsElement.paceCaretSpeedConfig.best.id = "";
		SettingsElement.paceCaretSpeedConfig.paceCaretCustomSpeedButton.id = "";
	}
}

export function changeSpeedUnitInUI(value) {
	if ( value === "cpm" ) {
		SettingsElement.statsConfig.unit.cpm.id = "selected";
		SettingsElement.statsConfig.unit.wpm.id = "";
	} else {
		SettingsElement.statsConfig.unit.cpm.id = "";
		SettingsElement.statsConfig.unit.wpm.id = "selected";
	}
}

function addColorsToCaretShape(shapeClicked, shape) {
	if ( shapeClicked === shape.classList[1] ) {
		if ( shapeClicked === "underscoreCaretShape" ) {
			shape.style.borderBottomColor = "var(--selected-color)";
		} else if ( (shapeClicked === "lineCaretShape") || (shapeClicked === "blockCaretShape") ) {
			shape.style.backgroundColor = "var(--selected-color)";
		} else if ( shapeClicked === "boxCaretShape" ) {
			shape.style.borderColor = "var(--selected-color)";
		}
	} else {
		if ( (shapeClicked !== "underscoreCaretShape") && (shape.classList[1] === "underscoreCaretShape") ) {
			shape.style.borderBottomColor = "var(--setting-caret-color)";
		} 
		if ( (shapeClicked !== "lineCaretShape") && (shape.classList[1] === "lineCaretShape") ) {
			shape.style.backgroundColor = "var(--setting-caret-color)";
		}
		if ( (shapeClicked !== "blockCaretShape") && (shape.classList[1] === "blockCaretShape") ) {
			shape.style.backgroundColor = "var(--setting-caret-color)";
		}
		if ( (shapeClicked !== "boxCaretShape") && (shape.classList[1] === "boxCaretShape") ) {
			shape.style.borderColor = "var(--setting-caret-color)";
		}
	}
}

function changeCaretShapeColor(shapeClicked, caretType = "caret") {

	
	if ( caretType === "caret" ) {
		const caretShapes = Array.from(document.querySelectorAll("div.configButtonContainer#CaretStyleConfig button > span.shape"));
		for ( const shape of caretShapes ) {
			addColorsToCaretShape(shapeClicked, shape);
		}
	} else if ( caretType === "pacecaret" ) {
		const paceCaretShapes = Array.from(document.querySelectorAll("div.configButtonContainer#PaceCaretStyleConfig button > span.shape"));
		for ( const shape of paceCaretShapes ) {
			addColorsToCaretShape(shapeClicked, shape);
		}
	}
}

export function changeCaretStyleInUI(value) {
	if ( value === "off" ) {
		changeCaretShapeColor("shape-off", "caret");
		SettingsElement.caretStyleConfig.off.id = "selected"
		SettingsElement.caretStyleConfig.style.underscore.id = ""
		SettingsElement.caretStyleConfig.style.line.id = ""
		SettingsElement.caretStyleConfig.style.box.id = ""
		SettingsElement.caretStyleConfig.style.block.id = ""
	} else if ( value === "underscore" ) {
		changeCaretShapeColor("shape-underscore", "caret");
		SettingsElement.caretStyleConfig.off.id = ""
		SettingsElement.caretStyleConfig.style.underscore.id = "selected"
		SettingsElement.caretStyleConfig.style.line.id = ""
		SettingsElement.caretStyleConfig.style.box.id = ""
		SettingsElement.caretStyleConfig.style.block.id = ""
	} else if ( value === "line" ) {
		changeCaretShapeColor("shape-line", "caret");
		SettingsElement.caretStyleConfig.off.id = ""
		SettingsElement.caretStyleConfig.style.underscore.id = ""
		SettingsElement.caretStyleConfig.style.line.id = "selected"
		SettingsElement.caretStyleConfig.style.box.id = ""
		SettingsElement.caretStyleConfig.style.block.id = ""
	} else if ( value === "box" ) {
		changeCaretShapeColor("shape-box", "caret");
		SettingsElement.caretStyleConfig.off.id = ""
		SettingsElement.caretStyleConfig.style.underscore.id = ""
		SettingsElement.caretStyleConfig.style.line.id = ""
		SettingsElement.caretStyleConfig.style.box.id = "selected"
		SettingsElement.caretStyleConfig.style.block.id = ""
	} else if ( value === "block" ) {
		changeCaretShapeColor("shape-block", "caret");
		SettingsElement.caretStyleConfig.off.id = ""
		SettingsElement.caretStyleConfig.style.underscore.id = ""
		SettingsElement.caretStyleConfig.style.line.id = ""
		SettingsElement.caretStyleConfig.style.box.id = ""
		SettingsElement.caretStyleConfig.style.block.id = "selected"
	}
}

export function changePaceCaretStyleInUI(value) {
	if ( value === "off" ) {
		changeCaretShapeColor("shape-off", "pacecaret");
		SettingsElement.paceCaretStyleConfig.off.id = "selected"
		SettingsElement.paceCaretStyleConfig.style.underscore.id = ""
		SettingsElement.paceCaretStyleConfig.style.line.id = ""
		SettingsElement.paceCaretStyleConfig.style.box.id = ""
		SettingsElement.paceCaretStyleConfig.style.block.id = ""
	} else if ( value === "underscore" ) {
		changeCaretShapeColor("shape-underscore", "pacecaret");
		SettingsElement.paceCaretStyleConfig.off.id = ""
		SettingsElement.paceCaretStyleConfig.style.underscore.id = "selected"
		SettingsElement.paceCaretStyleConfig.style.line.id = ""
		SettingsElement.paceCaretStyleConfig.style.box.id = ""
		SettingsElement.paceCaretStyleConfig.style.block.id = ""
	} else if ( value === "line" ) {
		changeCaretShapeColor("shape-line", "pacecaret");
		SettingsElement.paceCaretStyleConfig.off.id = ""
		SettingsElement.paceCaretStyleConfig.style.underscore.id = ""
		SettingsElement.paceCaretStyleConfig.style.line.id = "selected"
		SettingsElement.paceCaretStyleConfig.style.box.id = ""
		SettingsElement.paceCaretStyleConfig.style.block.id = ""
	} else if ( value === "box" ) {
		changeCaretShapeColor("shape-box", "pacecaret");
		SettingsElement.paceCaretStyleConfig.off.id = ""
		SettingsElement.paceCaretStyleConfig.style.underscore.id = ""
		SettingsElement.paceCaretStyleConfig.style.line.id = ""
		SettingsElement.paceCaretStyleConfig.style.box.id = "selected"
		SettingsElement.paceCaretStyleConfig.style.block.id = ""
	} else if ( value === "block" ) {
		changeCaretShapeColor("shape-block", "pacecaret");
		SettingsElement.paceCaretStyleConfig.off.id = ""
		SettingsElement.paceCaretStyleConfig.style.underscore.id = ""
		SettingsElement.paceCaretStyleConfig.style.line.id = ""
		SettingsElement.paceCaretStyleConfig.style.box.id = ""
		SettingsElement.paceCaretStyleConfig.style.block.id = "selected"
	}
}

export function changeBlindModeInUI(value) {
	if ( value === "on" ) {
		SettingsElement.goBlindConfig.off.id = "";
		SettingsElement.goBlindConfig.on.id = "selected";
	} else {
		SettingsElement.goBlindConfig.off.id = "selected";
		SettingsElement.goBlindConfig.on.id = "";
	}
}

export function changeTextWordLengthInUI(value) {
	if ( value === "short" ) {
		SettingsElement.lengthOfWordsInTextConfig.off.id = "";
		SettingsElement.lengthOfWordsInTextConfig.short.id = "selected";
		SettingsElement.lengthOfWordsInTextConfig.medium.id = "";
		SettingsElement.lengthOfWordsInTextConfig.long.id = "";
	} else if ( value === "medium" ) {
		SettingsElement.lengthOfWordsInTextConfig.off.id = "";
		SettingsElement.lengthOfWordsInTextConfig.short.id = "";
		SettingsElement.lengthOfWordsInTextConfig.medium.id = "selected";
		SettingsElement.lengthOfWordsInTextConfig.long.id = "";
	} else if ( value === "long" ) {
		SettingsElement.lengthOfWordsInTextConfig.off.id = "";
		SettingsElement.lengthOfWordsInTextConfig.short.id = "";
		SettingsElement.lengthOfWordsInTextConfig.medium.id = "";
		SettingsElement.lengthOfWordsInTextConfig.long.id = "selected";
	} else if ( value === "off" ) {
		SettingsElement.lengthOfWordsInTextConfig.off.id = "selected";
		SettingsElement.lengthOfWordsInTextConfig.short.id = "";
		SettingsElement.lengthOfWordsInTextConfig.medium.id = "";
		SettingsElement.lengthOfWordsInTextConfig.long.id = "";
	}
}