const COLORS_ARRAY = [
  "gray",
  "cyan",
  "gold",
  "orange",
  "green",
  "magenta",
  "red",
  "yellow",
  "blue",
  "white",
];

function runGame() {
  let guess = "",
    correct = false,
    numTries = 0;
  const target = COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)];
  console.log(target);
  do {
    numTries++;
    guess = prompt(
      `I am thinking of one of these colors:\n${COLORS_ARRAY.sort().join(
        ", "
      )}\nWhat color am I thinking of?\nAttempts: ${numTries}`
    );
    if (guess === null) {
      console.log("User clicked cancel");
      return;
    }
    correct = checkGuess(guess.toLowerCase(), target);
  } while (!correct);
  alert(`Congrats! You've guessed it in ${numTries} attempts!`);
}

function checkGuess(guess, target) {
  let correct = false;
  if (!COLORS_ARRAY.includes(guess)) {
    alert(`Sorry, I don't recognize your color.\nPlease try again.`);
  } else if (guess > target) {
    alert(
      `Sorry, your guess is incorrect.\nYour guess is alphabetically higher than target.\nPlease try again.`
    );
  } else if (guess < target) {
    alert(
      `Sorry, your guess is incorrect.\nYour guess is alphabetically lower than target.\nPlease try again.`
    );
  } else if (guess === target) {
    document.body.style.background = guess;
    correct = !correct;
  }

  return correct;
}
