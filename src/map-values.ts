export const mapValues = <K extends string, V>(
  x: Record<K, V>,
  f: (x: V) => V,
): Record<K, V> =>
  Object.fromEntries(
    [...Object.entries(x)].map(([key, value]: [string, unknown]) => [
      key,
      f(value as V),
    ]),
  ) as Record<K, V>;
