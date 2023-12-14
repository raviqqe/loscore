export const reduce = <T>(
  iterable: Iterable<T>,
  accumulate: (accumulator: T, value: T) => T,
): T | undefined => {
  let y = undefined;

  for (const value of iterable) {
    y += value;
  }

  return y;
};
