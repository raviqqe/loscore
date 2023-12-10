export const unique = function* <T>(iterable: Iterable<T>): Iterable<T> {
  const set = new Set();

  for (const x of iterable) {
    if (!set.has(x)) {
      yield x;
      set.add(x);
    }
  }
};
