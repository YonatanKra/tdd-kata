function throwError(errorMessage) {
  throw new Error(errorMessage);
}

export function calcStats(sequence: number[]) {
  if (!Array.isArray(sequence)) throwError('sequence must be an array');
  if (sequence.length === 0) throwError('Array cannot be empty.');

  return {
    minimumValue: sequence.reduce((currMin, nextVal) => currMin < nextVal ? currMin : nextVal, Infinity)
  };

}
