export const fold = <T>(
  iterable: Iterable<T>,
  initial: T,
  accumulate: (accumulator: T, value: T) => T,
): T => {
  let accumulator = initial;

  for (const value of iterable) {
    accumulator = accumulate(accumulator, value);
  }

  return accumulator;
};
