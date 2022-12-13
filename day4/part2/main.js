import fs from "fs";
import { isOverlap } from "./helpers.js";

const file = fs.readFileSync("../inputs.txt");
const sections = file.toString().split("\n");
let numberOfOverlappingGroups = 0;

sections.forEach((section) => {
  const pairs = section.split(",");
  if (pairs.length === 2) {
    const pair1 = pairs[0].split("-").map((x) => +x);
    const pair2 = pairs[1].split("-").map((x) => +x);
    numberOfOverlappingGroups += isOverlap(pair1, pair2) ? 1 : 0;
  }
});
console.log(`Number of overlapping groups = ${numberOfOverlappingGroups}`);
