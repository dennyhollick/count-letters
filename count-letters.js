var sentence = "lighthouse in the house";

function countLetters(text) {
  var letterCounter = {};

  for (var letter of text) {
    if (letter === ' ') continue;
    if (letterCounter[letter] === undefined) letterCounter[letter] = 0;
    letterCounter[letter] += 1;
  }
return letterCounter;
}

console.log(countLetters(sentence));
