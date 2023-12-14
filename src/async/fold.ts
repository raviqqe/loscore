export const fold = async <T>(
  iterable: AsyncIterable<T>,
  initial: T,
  accumulate: (accumulator: T, value: T) => T,
): Promise<T> => {
  let accumulator = initial;

  for await (const value of iterable) {
    accumulator = accumulate(accumulator, value);
  }

  return accumulator;
};
