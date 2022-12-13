import fs from "fs";
import { getCommonLetter, getPriority } from "./helpers.js";

const file = fs.readFileSync("../inputs.txt");
const rucksacks = file.toString().split("\n");
let totalPriorities = 0;
let groupOfRucksacks = [];
rucksacks.forEach((rucksack) => {
  groupOfRucksacks.push(rucksack);
  if (groupOfRucksacks.length === 3) {
    const commonLetter = getCommonLetter(groupOfRucksacks);
    const priority = getPriority(commonLetter);
    totalPriorities += isNaN(priority) ? 0 : priority;
    groupOfRucksacks = [];
  }
});
console.log(`Total priorities : ${totalPriorities}`);
