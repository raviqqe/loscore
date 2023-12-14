export const fold = async <T, S>(
  iterable: AsyncIterable<T>,
  initial: S,
  accumulate: (accumulator: S, value: T) => S,
): Promise<S> => {
  let accumulator = initial;

  for await (const value of iterable) {
    accumulator = accumulate(accumulator, value);
  }

  return accumulator;
};
