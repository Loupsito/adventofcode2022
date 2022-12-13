import * as fs from "fs";

const file = fs.readFileSync("../inputs.txt");
const elves = file.toString().split("\n\n");
let [top1Elf, top2Elf, top3Elf] = [0, 0, 0];

elves.forEach((elf) => {
  const elfCalories = elf
    .split("\n")
    .map((input) => parseInt(input, 10))
    .reduce((a, b) => a + b, 0);

  if (elfCalories > top1Elf) {
    top3Elf = top2Elf;
    top2Elf = top1Elf;
    top1Elf = elfCalories;
  } else if (elfCalories > top2Elf) {
    top3Elf = top2Elf;
    top2Elf = elfCalories;
  } else if (elfCalories > top3Elf) {
    top3Elf = elfCalories;
  }
});

console.log(`RESULT : 1st: ${top1Elf} | 2nd: ${top2Elf} | 3rd: ${top3Elf}`);
console.log("RESULT : max = ", top1Elf + top2Elf + top3Elf);
