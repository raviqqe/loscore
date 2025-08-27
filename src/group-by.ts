export const groupBy = <T, K extends number | string | symbol>(
  iterable: Iterable<T>,
  getKey: (value: T) => K,
): Record<K, T[]> => {
  const ys = {} as Record<K, T[]>;

  for (const x of iterable) {
    (ys[getKey(x)] ??= []).push(x);
  }

  return ys;
};
