export const unique = function* <T>(xs: T[]): Iterable<T> {
  const set = new Set();

  for (const x of xs) {
    if (!set.has(x)) {
      yield x;
      set.add(x);
    }
  }
};
