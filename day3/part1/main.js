import fs from "fs";
import {getCommonLetter, getPriority} from "./helpers.js";

const file = fs.readFileSync("./inputs.txt");
const rucksacks = file.toString().split("\n");
let totalPriorities = 0;
rucksacks.forEach((rucksack) => {
  const half = Math.ceil(rucksack.length / 2);
  const firstCompartment = rucksack.slice(0, half);
  const secondCompartment = rucksack.slice(half);

  const commonLetter = getCommonLetter(firstCompartment, secondCompartment);
  const priority = getPriority(commonLetter);
  totalPriorities += isNaN(priority) ? 0 : priority;
});
console.log(`Total priorities : ${totalPriorities}`);
