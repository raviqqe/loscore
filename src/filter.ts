export const filter = function* <T, S extends T = T>(
  xs: Iterable<T>,
  f: (x: T) => x is S,
): Iterable<S> {
  for (const x of xs) {
    if (f(x)) {
      yield x;
    }
  }
};
