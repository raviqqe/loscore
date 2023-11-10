export const isTruthy = Boolean as unknown as <T>(
  x: T,
) => x is Exclude<T, 0 | "" | false | null | undefined>;
