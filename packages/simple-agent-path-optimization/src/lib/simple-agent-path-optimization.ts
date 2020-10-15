const OPPOSITES = {
  UP: "DOWN",
  DOWN: "UP",
  LEFT: "RIGHT",
  RIGHT: "LEFT"
}
export function countSimilarElements(list: any[], startingIndex: number): number {
  const currentElement = list[startingIndex];
  for (let i = startingIndex + 1; i < list.length; i++) {
    if (list[i] !== currentElement) return i;
  }
  return null;
}

export function optimizeAgent(input: any[]) {
  const result = [...input];
  if (result[0] === OPPOSITES[result[1]]) result.splice(0, 2);
  return result;
}
