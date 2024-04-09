export const uniqueBy = function* <T>(
  iterable: Iterable<T>,
  buildKey: (value: T) => unknown,
): Iterable<T> {
  const set = new Set();

  for (const value of iterable) {
    const key = buildKey(value);

    if (!set.has(key)) {
      yield value;
      set.add(key);
    }
  }
};
