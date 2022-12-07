import * as fs from "fs";

const file = fs.readFileSync("./inputs.txt");
const elves = file.toString().split("\n\n");
let max = 0;

elves.forEach((elf) => {
  const calories = elf
    .split("\n")
    .map((input) => parseInt(input, 10))
    .reduce((a, b) => a + b, 0);
  max = max < calories ? calories : max;
});

console.log("max = ", max);
