export const map = function* <T, S>(
  xs: Iterable<T>,
  f: (x: T) => S,
): Iterable<S> {
  for (const x of xs) {
    yield f(x);
  }
};
