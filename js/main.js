
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
  add _ _ _ _ for word
*/

var sayHi = function(name) {
  console.log("Hello there, " + name);
};

console.log("Hangman is just a game");
// sayHi(prompt("Please enter your name."))

var turns_left = function() {
  return Number(document.getElementById('turn-count').textContent);
}

var guessed = [];

var wordList = 
  ["cookies", "elephant", "doughnut", "doge", "transport", "recursion", "agriculture", "antidisestablishmentarianism",
   "espresso", "computer", "transmorgify", "lightsaber"];


var randomItem = function(items) {
  index = Math.floor(Math.random()*wordList.length);
  return items[index];
}


var answer = randomItem(wordList);
console.log("The magic word is " + answer);


// document.querySelector(".alphabet") will return first HTML elements classed ".alphabet"
// document.querySelectorAll(".alphabet") will return all HTML elements classed ".alphabet"
// querySelectorAll with an added [#] will give that specific HTML element



// addEventListener for js/page magic

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

var el = document.querySelector("#turn-count");
el.addEventListener('click', bumpCount);


// var el = document.querySelector("#turn-count");
// el.addEventListener("click", function(e) {
//   console.log(e);
//   target = e.target
// });

// var butt = document.querySelector(".form-button");
// butt.addEventListener('click', function(e) {
//   e.preventDefault();
//   var input = document.querySelector(".count-input");
//   var turns = document.querySelector("#turn-count");
//   turns.textContent = input.value
// });

var letters = document.querySelector(".alphabet");
letters.addEventListener('click', function(event) {
  var text = event.target.textContent;
  if (!guessed.includes(text)) {
    //Add class to an element with JavScript
    event.target.classList.add("guessed"); //classList does NOT need the '.' befroe the class name.  iT already knows its a class
    guessed.push(text);
    console.log(text);
    console.log(guessed);
  } else {
    alert("You already guessed that dummy.");
  };
});









