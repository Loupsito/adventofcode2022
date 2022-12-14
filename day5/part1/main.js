import fs from "fs";

const file = fs.readFileSync("../inputs.txt");
const lines = file.toString().split("\n");

console.log(lines);