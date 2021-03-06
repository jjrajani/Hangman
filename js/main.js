var sayHi = function(name) {
  console.log("Hello there, " + name);
};

console.log("Hangman is just a game");

var guessed = [];

var wordList = 
  ["apple", "animal", "against", "antagonistic", "anticlamactic", "answer", "another", "barbell",
   "baseball", "ballooon", "beige", "bananas", "banker", "controls", "chart", "change", "classic",
   "clever", "dinosaur", "delicious", "delight", "default", "disco", "emergency", "escort",
   "eventually", "electric", "finish", "flatten", "figure", "fox", "flamingo", "great", "garage", 
   "giant", "greenbeans", "hyper", "human", "holistic", "hillarious", "igloo", "ignorant", "instead",
   "inside", "intent", "jenna", "jellyfish", "juice", "jungle", "kite", "killer", "kindness", "knot",
   "lioness", "liver", "lofty", "language", "luminous", "mountain", "mindless", "mixture", "mirror",
   "nose", "nightlight", "noxious", "nightmare", "option", "only", "ostentatious", "overly", "popcorn",
   "precious", "pillow", "pressure", "quiet", "question", "quiver", "quest", "restfull", "regain",
   "remember", "relation", "stupendous", "stubborn", "spacious", "sliver", "titanium", "teardrop", 
   "tiger", "telecaster", "umbrella", "underneath", "universal", "unsure", "vendetta", "vicarious",
   "vivid", "violent", "windshield", "west", "whenever", "wholesome", "xylophone", "xanthium", "yodel",
   "yearning", "yeast", "yesterday", "young", "zipper", "zapping", "zoology", "cookies", "elephant", "doughnut", "doge", "transport", 
   "recursion", "agriculture", "antidisestablishmentarianism",
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
    alert("Game over you greedy cheater")
    location.reload()
  } else {
   target.innerHTML = Number(target.innerHTML) +1
  }
};

var gameOver = function() {
  alert("You hung! The word was " + answer)
}

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
    } else {
      spaces = document.querySelectorAll("#board p");
      spaces[answer.indexOf(letter)].textContent = letter
    }
  }
  if (turnCount.textContent == 0) {
        gameOver()
        location.reload()
      }
}

var youWin = function() {
  alert("YOU WIN!")
  location.reload();
}



var el = document.querySelector("#turn-count");
el.addEventListener('click', bumpCount);

var letters = document.querySelector(".alphabet");
letters.addEventListener('click', makeGuess);

correctGuessed = 0

var keyStroke = document.onkeypress = function(e) {
    letter = ''

    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (charCode) {
        letter = String.fromCharCode(charCode)
        letterGuessed = document.getElementById(letter)
        letterGuessed.classList.add("guessed")
        if (turnCount.textContent < 2) {
          gameOver()
          location.reload()
        }


        if (!guessed.includes(letter)) {
          guessed.push(letter);
          //change turn count
        if (!answer.includes(letter)) {
          turnCount.textContent = Number(turnCount.textContent) - 1;
        } else {
          spaces = document.querySelectorAll("#board p");

          for (i in answer) {
            if (answer[i] == letter && spaces[i].textContent == "") {
              spaces[i].textContent = letter
              correctGuessed++

              if (correctGuessed == answer.length) {
                youWin()
              }
            }
          }

          // spaces[answer.indexOf(letter)].textContent = letter
    }
  }

    }

};





