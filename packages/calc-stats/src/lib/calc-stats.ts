function throwError(errorMessage) {
  throw new Error(errorMessage);
}

export function minimumValue(sequence: number[]) {
  if (!Array.isArray(sequence)) throwError('sequence must be an array');
  if (sequence.length === 0) throwError('Array cannot be empty.');
  let minValueInSequence = Infinity;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] < minValueInSequence) minValueInSequence = sequence[i];
  }
  return minValueInSequence;
}
