#### Week 2 - Hangman - Class Work

* Used `document.onkeypress` to implement keystroke guesses
* ```javascript 
    var keyStroke = document.onkeypress = function(e) {
        e = e || window.event;
        var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
        
        if (charCode) { 
            //write function here
        }
    ```
* Used `.classList.add()` to add class to strike out guessed letters.
* Used below code to generate random word selection from array of words.
    ```javascript
    var randomItem = function(items) {
        index = Math.floor(Math.random()*wordList.length);
        return items[index];
    }
```

