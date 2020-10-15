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

function removeOpposites(result: any[], startingPosition: number): boolean {
  if (result[startingPosition - 1] === OPPOSITES[result[startingPosition]]) {
    result.splice(startingPosition - 1, 2);
    return true;
  }
  return false;
}

export function optimizeAgent(input: any[]) {
  const result = [...input];
  let startingPosition = 0;
  while (startingPosition !== null) {
    startingPosition = countSimilarElements(result, startingPosition);
    if (startingPosition !== null) {
      if (removeOpposites(result, startingPosition)) startingPosition-=2;
    }
  }
  return result;
}
