export const mapValues = <K extends number | string | symbol, V, W>(
  x: Record<K, V>,
  f: (x: V) => W,
): Record<string, W> =>
  Object.fromEntries(
    [...Object.entries<V>(x)].map(([key, value]) => [key, f(value)]),
  );
