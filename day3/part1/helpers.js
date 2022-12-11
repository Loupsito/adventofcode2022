
export function getCommonLetter(firstCompartment, secondCompartment) {
  let commonLetter = null;
  firstCompartment.split("").forEach((letter) => {
    const array = secondCompartment.split("");
    if (array.includes(letter)) {
      commonLetter = letter;
    }
  });
  return commonLetter;
}

export function getPriority(letter) {
  if (letter) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const indexLetter = alphabet.findIndex(
        (element) => element === letter.toLowerCase()
    );
    return isUpperCase(letter) ? indexLetter + 27 : indexLetter + 1;
  }
}

function isUpperCase(input) {
  return input === String(input).toUpperCase();
}
