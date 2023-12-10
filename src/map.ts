export const map = function* <T, S>(
  iterable: Iterable<T>,
  convert: (x: T) => S,
): Iterable<S> {
  for (const value of iterable) {
    yield convert(value);
  }
};
