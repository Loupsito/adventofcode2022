import fs from "fs";
import { getPointsFromBattle, getPointsFromShape } from "./helpers.js";

const file = fs.readFileSync("./inputs.txt");
const rounds = file.toString().split("\n");
let score = 0;

rounds.forEach((round) => {
  const myShape = round[2];
  const pointsFromMyShape = getPointsFromShape(myShape);
  const pointsFromBattle = getPointsFromBattle(round);

  score += pointsFromMyShape + pointsFromBattle;
});
console.log(`My total score: ${score}`);
