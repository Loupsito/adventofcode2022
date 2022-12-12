export function getCommonLetter(groupOfRucksacks) {
  let commonLetter = null;
  groupOfRucksacks[0].split("").forEach((letter) => {
    const secondRucksacks = groupOfRucksacks[1].split("");
    const thirdRucksacks = groupOfRucksacks[2].split("");
    if (secondRucksacks.includes(letter) && thirdRucksacks.includes(letter)) {
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
