export const fold = <T, S>(
  iterable: Iterable<T>,
  initial: S,
  accumulate: (accumulator: S, value: T) => S,
): S => {
  let accumulator = initial;

  for (const value of iterable) {
    accumulator = accumulate(accumulator, value);
  }

  return accumulator;
};
