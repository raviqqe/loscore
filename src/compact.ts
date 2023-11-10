export const compact = <T>(
  xs: T[],
): Exclude<T, 0 | "" | false | null | undefined>[] =>
  xs.filter(Boolean) as Exclude<T, 0 | "" | false | null | undefined>[];
