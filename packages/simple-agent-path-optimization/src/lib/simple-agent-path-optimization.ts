export function countSimilarElements(list: any[], startingIndex: number): number {
  const currentElement = list[startingIndex];
  for (let i = startingIndex + 1; i < list.length; i++) {
    if (list[i] !== currentElement) return i;
  }
  return null;
}

export function optimizeAgent(input: any[]) {
  return [];
}
