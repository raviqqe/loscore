import { filter } from "./filter.js";

// TODO How can we not tell lie to the type system...?
export const filterValues: {
  <K extends string | number | symbol, V, W extends V = V>(
    object: Record<K, V>,
    test: (value: V) => value is W,
  ): Record<string, W>;
  <K extends string | number | symbol, V>(
    object: Record<K, V>,
    test: (value: V) => unknown,
  ): Record<string, V>;
} = <K extends string, V>(
  object: Record<K, V>,
  test: (value: V) => unknown,
): Record<string, V> =>
  Object.fromEntries<V>(
    filter(Object.entries<V>(object), ([, value]) => test(value)),
  );
