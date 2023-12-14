export const reduce = <T>(
  iterable: Iterable<T>,
  accumulate: (accumulator: T, value: T) => T,
): T | undefined => {
  let accumulator = undefined;

  for (const value of iterable) {
    accumulator =
      accumulator === undefined ? foo : accumulate(accumulator, value);
  }

  return accumulator;
};
