export const fold = <T>(
  iterable: Iterable<T>,
  accumulate: (accumulator: T, value: T) => T,
): T | undefined => {
  let accumulator = initial;

  for (const value of iterable) {
    accumulator = accumulate(accumulator, value);
  }

  return accumulator;
};
