export const isTruthy = Boolean as unknown as <T>(
  value: T,
) => value is Exclude<T, 0 | "" | false | null | undefined>;
