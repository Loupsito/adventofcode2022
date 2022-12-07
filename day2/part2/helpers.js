export function decodeShape(encodedShape) {
  if (encodedShape === "A") {
    return "rock";
  }
  if (encodedShape === "B") {
    return "paper";
  }
  if (encodedShape === "C") {
    return "scissors";
  }
}

export function getShapeToPlayAccordingToGuide(
    decodedOpponentShape,
    instruction
) {
  const strategy = {
    rock: {
      win: "paper",
      draw: "rock",
      lose: "scissors",
    },
    paper: {
      win: "scissors",
      draw: "paper",
      lose: "rock",
    },
    scissors: {
      win: "rock",
      draw: "scissors",
      lose: "paper",
    },
  };

  const isLose = instruction === "X";
  const isDraw = instruction === "Y";
  const isWin = instruction === "Z";

  if (isWin) {
    return strategy[decodedOpponentShape].win;
  } else if (isDraw) {
    return strategy[decodedOpponentShape].draw;
  } else if (isLose) {
    return strategy[decodedOpponentShape].lose;
  }
}


export function getPointsFromShape(symbol) {
  const isRock = symbol === "rock";
  const isPaper = symbol === "paper";
  const isScissors = symbol === "scissors";
  let points = 0;

  if (isRock) {
    points = 1;
  } else if (isPaper) {
    points = 2;
  } else if (isScissors) {
    points = 3;
  }

  return points;
}

export function getPointsFromWinDrawOrLose(instructionFromGuide) {
  const isDraw = instructionFromGuide === "Y";
  const isWin = instructionFromGuide === "Z";
  let points = 0;

  if (isWin) {
    points = 6;
  } else if (isDraw) {
    points = 3;
  }

  return points;
}
