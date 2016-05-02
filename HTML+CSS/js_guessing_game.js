var target = ["blue", "cyan", "gold", "green", "magenta", "orange", "red", "white", "yellow"];
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;

function do_game() {
    var random_number = Math.random() * 9;
    var target_index = Math.floor(random_number);
    alert("Target corlor is: " + target[target_index]);

    while (!finished) {
        guess_input_text = prompt("I am thinking of one of these colors:\n\n"+
                                  "blue, cyan, gold, green, magenta, orange, red, white, yellow\n\n"+
                                  "What color am I thinking of?");
        guess_input = guess_input_text;
        guesses += 1;
        finished = (target[target_index] == guess_input);
    }
    alert("you guessed "+guesses+" times to win the games!")
}

/*function check_guess() {
    if (isNaN(guess_input)) {
        alert("You have not entered a number.\n\n" +
              "Please enter a number in the range 1 to 100.");
        return false;
    }
    if ((guess_input < 1) || (guess_input > 100)) {
        alert("Please enter an integer number in the range 1 to 100.");
        return false;
    }
    if (guess_input > target) {
        alert("Your number is too large!");
        return false;
    }
    if (guess_input < targte) {
        alert("Your numebr is too small!");
        return false;
    }
    alert("You got it! The number was " + target +
          ".\n\nIt took you " + guesses +
          " guesses to get the number!");
    return true;

}*/
