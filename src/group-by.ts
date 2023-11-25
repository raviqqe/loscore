export const groupBy = <T, K extends string | number | symbol>(
  xs: Iterable<T>,
  f: (x: T) => K,
): Record<K, T[]> => {
  const ys = {} as Record<K, T[]>;

  for (const x of xs) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    (ys[f(x)] ??= []).push(x);
  }

  return ys;
};
