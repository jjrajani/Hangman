
/*
Data:
  words/dictionary
  guesses
  turn count
  answer


Actions:
  Add a guess when user clicks letter
  if guess is worng lose a turn
  fill in letters
  game over

*/

var sayHi = function(name) {
  console.log("Hello there, " + name);
};

console.log("Hangman is just a game");
// sayHi(prompt("Please enter your name."))

var turns_left = function() {
  return document.getElementById('turn-count').textContent;
}

var guesses = [];

var wordList = 
  ["cookies", "elephant", "doughnut", "doge", "transport", "recursion", "agriculture", "antidisestablishmentarianism",
   "espresso", "computer", "transmorgify", "lightsaber"];


var randomItem = function(items) {
index = Math.floor(Math.random()*wordList.length)
return index
}

// console.log(wordList[randomItem()])