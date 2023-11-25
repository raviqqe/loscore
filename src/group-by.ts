export const groupBy = <T, K extends string | number | symbol>(
  xs: Iterable<T>,
  f: (x: T) => K,
): Record<K, T[]> => {
  let ys = {} as Record<K, T[]>;

  for (const x of xs) {
    (ys[f(x)] ??= []).push(x);
  }

  return ys;
};
