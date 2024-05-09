export const deepClone = <T>(x: T): T =>
  Array.isArray(x)
    ? (x.map(deepClone) as T)
    : x && typeof x === "object"
      ? (Object.fromEntries(
          Object.entries(x as Record<string, unknown>).map(deepClone),
        ) as T)
      : x;
