export const reduce = async <T>(
  iterable: AsyncIterable<T>,
  accumulate: (accumulator: T, value: T) => T,
): Promise<T | undefined> => {
  let accumulator = undefined;

  for await (const value of iterable) {
    accumulator =
      accumulator === undefined ? value : accumulate(accumulator, value);
  }

  return accumulator;
};
