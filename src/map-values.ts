export const mapValues = <K extends number | string | symbol, V, W>(
  x: { [k in K]: V },
  f: (x: V) => W,
): { [k: string]: W } =>
  Object.fromEntries(
    [...Object.entries<V>(x)].map(([key, value]) => [key, f(value)]),
  );
