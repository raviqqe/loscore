export const filter = function* <T>(
  xs: Iterable<T>,
  f: (x: T) => unknown,
): Iterable<T> {
  for (const x of xs) {
    if (f(x)) {
      yield x;
    }
  }
};
