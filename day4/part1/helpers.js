export function isFullyOverlaps(group1, group2) {
  const [startGroup1, endGroup1] = group1;
  const [startGroup2, endGroup2] = group2;

  if (startGroup1 < startGroup2 || endGroup1 > endGroup2) {
    return startGroup2 >= startGroup1 && endGroup2 <= endGroup1;
  } else {
    return startGroup1 >= startGroup2 && endGroup1 <= endGroup2;
  }
}
