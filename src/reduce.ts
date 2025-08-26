export const reduce = <T>(
  iterable: Iterable<T>,
  accumulate: (accumulator: T, value: T) => T,
): T | undefined => {
  let accumulator;

  for (const value of iterable) {
    accumulator =
      accumulator === undefined ? value : accumulate(accumulator, value);
  }

  return accumulator;
};
