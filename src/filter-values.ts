export const filterValues = <K extends number | string | symbol, V, W>(
  object: Record<K, V>,
  convert: (value: V) => W,
): Record<string, W> =>
  Object.fromEntries(
    [...Object.entries<V>(object)].map(([key, value]) => [key, convert(value)]),
  );
