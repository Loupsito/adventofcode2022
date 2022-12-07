export function getPointsFromShape(symbol) {
  const isRock = symbol === "X";
  const isPaper = symbol === "Y";
  const isScissors = symbol === "Z";
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

export function getPointsFromBattle(round) {
  const isWin = ["A Y", "B Z", "C X"].includes(round);
  const isDraw = ["A X", "B Y", "C Z"].includes(round);
  let points = 0;

  if (isWin) {
    points = 6;
  } else if (isDraw) {
    points = 3;
  }
  return points;
}
