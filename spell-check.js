// here we are using our SpellChecker package by imorting it using 'require'
const SpellChecker = require("simple-spellchecker");


// this funciton will make use of our SpellChecker code.  
// It's up to us to wrtie a callback to describe how to use it
function checkWord(word) {
    SpellChecker.getDictionary("en-US", function (err, dictionary) {
      // If there was a problem setting up the Spell Checker, inform the user an exit out of the function with a return statement
      if (err) {
        console.log("There was an error", err);
        return;
      }
      // returns a boolean
      /// bad spelled word = false;
      const isMisspelled = !dictionary.spellCheck(word);
      // if the word is isMisspelled
      if (isMisspelled) {
        // Provide user feedback
        console.log(`The word ${word} is incorrect.`);
        // Use the spellchecker to get suggested correct words
        const suggestions = dictionary.getSuggestions(word);
        // Log the words as a string
        console.log(`Did you mean:`, suggestions.join(" "));
      } else {
        // Notify the user that the word was spelled correctly
        console.log(`Your word ${word} is spelled correctly.`);
      }
    });
  }

  // we need to check an entire phrase 
    // function accepts a string;
    // function should return a true if all words are spelled correctly
    // should return false otherwise 
function checkWords (words) {
  SpellChecker.getDictionary("en-US", function (err, dictionary) {
    if (err) {
      console.log("There was an error", err);
      return;
    }
    let splitWords = words.split(" ");
    let allWordsCorrect = true;
    // our program thinks an entire phrase is one word
    // how do we do what we did above for every item in our sentence?
    // we need an array
    splitWords.forEach((word) => {
      // if the word is spelled incorrect isMisspelled will be TRUE
      const isMisspelled = !dictionary.spellCheck(word);
      // if the word is isMisspelled
      if (isMisspelled) {
        allWordsCorrect = false;
        // Provide user feedback
        console.log(`The word ${word} is incorrect.`);
        // Use the spellchecker to get suggested correct words
        const suggestions = dictionary.getSuggestions(word);
        // Log the words as a string
        console.log(`Did you mean:`, suggestions.join(" "));
      } 
    });
    if (allWordsCorrect) {
      console.log("your phrase is all spelled correctly")
    }
  })
};



module.exports = {
  checkWord,
  checkWords
}


