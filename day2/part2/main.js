import fs from "fs";
import {decodeShape, getPointsFromWinDrawOrLose, getPointsFromShape, getShapeToPlayAccordingToGuide,} from "./helpers.js";

const file = fs.readFileSync("../inputs.txt");
const rounds = file.toString().split("\n");
let score = 0;

rounds.forEach((round) => {
  const opponentShape = decodeShape(round[0]);
  const instructionFromGuide = round[2];
  const shapeToPlayAccordingToGuide = getShapeToPlayAccordingToGuide(opponentShape, instructionFromGuide)

  const pointsFromMyShape = getPointsFromShape(shapeToPlayAccordingToGuide);
  const pointsFromBattle = getPointsFromWinDrawOrLose(instructionFromGuide);

  score += pointsFromMyShape + pointsFromBattle;
});
console.log(`My total score: ${score}`);
