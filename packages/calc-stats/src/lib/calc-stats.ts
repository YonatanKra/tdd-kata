function throwError(errorMessage) {
  throw new Error(errorMessage);
}

export function minimumValue(sequence: number[]) {
  if (!Array.isArray(sequence)) throwError('sequence must be an array');
  throwError('Array cannot be empty.');
}
