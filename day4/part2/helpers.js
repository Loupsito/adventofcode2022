export function isOverlap(group1, group2) {
  const [startGroup1, endGroup1] = group1;
  const [startGroup2, endGroup2] = group2;

  if (startGroup1 < startGroup2 || endGroup1 > endGroup2) {
    return endGroup1 >= startGroup2 && startGroup1 <= endGroup2;
  } else {
    return endGroup2 >= startGroup1 && startGroup2 <= endGroup1;
  }
}
