export const groupBy = <T, K extends string | number | symbol>(
  iterable: Iterable<T>,
  getKey: (value: T) => K,
): Record<K, T[]> => {
  const ys = {} as Record<K, T[]>;

  for (const x of iterable) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    (ys[getKey(x)] ??= []).push(x);
  }

  return ys;
};
