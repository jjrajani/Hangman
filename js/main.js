var sayHi = function(name) {
  console.log("Hello there, " + name);
};

console.log("Hangman is just a game");

var guessed = [];

var wordList = 
  ["cookies", "elephant", "doughnut", "doge", "transport", "recursion", "agriculture", "antidisestablishmentarianism",
   "espresso", "computer", "transmorgify", "lightsaber"];

var randomItem = function(items) {
  index = Math.floor(Math.random()*wordList.length);
  return items[index];
}

var turnCount = document.getElementById('turn-count')

var answer = randomItem(wordList);
console.log("The magic word is " + answer);

var board = document.querySelector("#board")
var newHTML = "";
for(var i = 0; i < answer.length; i++) {
  newHTML += "<p></p>"
}

board.innerHTML = newHTML;

var removeGuess = function(e) {
  console.log(e);
};

var bumpCount = function(e) {
  var target = e.target;
  if (Number(target.innerHTML) >= 15 || target.innerHTML == "NO MORE") {
    target.innerHTML = "NO MORE"
  } else {
   target.innerHTML = Number(target.innerHTML) +1
  }
};

var makeGuess = function (e) {
  var pageNode = e.target;
  var letter = pageNode.textContent;
  //cross out guessed letters
  if (!guessed.includes(letter)) {
    pageNode.classList.add("guessed");
    guessed.push(letter);
    //change turn count
    if (!answer.includes(letter)) {
      turnCount.textContent = Number(turnCount.textContent) - 1;
    }
  }
}

var el = document.querySelector("#turn-count");
el.addEventListener('click', bumpCount);

var letters = document.querySelector(".alphabet");
letters.addEventListener('click', makeGuess);





