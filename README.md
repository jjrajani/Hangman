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