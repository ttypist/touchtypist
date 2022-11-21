// 🌟🌟🌟
// Next step is to implement sentence object along with config object.
// after that reimplement caretstyles with javascript and resolve the
// animation delay problem.
// 

class Sentence {
  #words; // array of strings
  #currentWordIndex; // stores index for current word which the user is typing
  #currentLetterIndex; // stores the index for current letter of current word

  constructor(words) {
    // expects an 1D array of strings

    if (arguments.length === 0) {
      this.#words = new Array();
    } else {
      this.#words = Array.from(words);
    }

    this.#currentWordIndex = 0;
    this.#currentLetterIndex = 0;
  }

  push_front(...words) {
    // expects a string or array of strings
    for (let word of words) {
      this.#words.unshift(word);
    }
  }
  push_back(...words) {
    // expects a string or array of strings
    for (let word of words) {
      this.#words.push(word);
    }
  }
  pop_front() {
    // removes first word
    return this.#words.shift();
  }
  pop_back() {
    // removes last word
    return this.#words.pop();
  }

  get totalwords() {
    // return the total number of words present in words array
    return this.#words.length;
  }

  get activeWord() {
    // returns the active word
    try {
      if (
        this.#currentWordIndex < 0 ||
        this.#currentWordIndex >= this.#words.length
      ) {
        throw "'currentWordIndex' is out of bound";
      }

      return this.#words[this.#currentWordIndex];
    } catch (outofbounderror) {
      console.error(outofbounderror);
    }
  }

  get activeLetter() {
    // returns the active letter
    try {
      if (
        this.#currentWordIndex < 0 ||
        this.#currentWordIndex >= this.#words.length
      ) {
        throw "'currentWordIndex' is out of bound";
      }

      if (
        this.#currentLetterIndex < 0 ||
        this.#currentLetterIndex >= this.#words[this.#currentWordIndex].length
      ) {
        throw "'currentLetterIndex' is out of bound";
      }

      return this.#words[this.#currentWordIndex][this.#currentLetterIndex];
    } catch (outofbounderror) {
      console.error(outofbounderror);
    }
  }

  get activeWordLength() {
    // returns length of active word
    return this.#words[this.#currentWordIndex].length;
  }

  get activeWordIndex() {
    // returns active word's index
    return this.#currentWordIndex;
  }
  get activeLetterIndex() {
    // returns active letter's index of active word
    return this.#currentLetterIndex;
  }

  set activeWordIndex(index) {
    // set new index for active word
    this.#currentWordIndex = index;
  }
  set activeLetterIndex(index) {
    // set new index for active letter of active word
    this.#currentLetterIndex = index;
  }

  resetActiveWordIndex() {
    this.#currentWordIndex = 0;
  }
  resetActiveLetterIndex() {
    this.#currentLetterIndex = 0;
  }
  resetindexes() {
    this.resetActiveWordIndex();
    this.resetActiveLetterIndex();
  }

  goToNextLetter() {
    this.#currentLetterIndex++;
  }
  goToPreviousLetter() {
    this.#currentLetterIndex--;
  }
  goToNextWord() {
    this.#currentWordIndex++;
  }
  goToPreviousWord() {
    this.#currentWordIndex--;
  }
}

class WordsCorrected {}
class WordsNotCorrected {}

const sentence = new Sentence();