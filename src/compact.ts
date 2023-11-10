export const compact = <T>(
  xs: T[],
): Exclude<T, 0 | "" | false | null | undefined>[] =>
  xs.filter((x): x is Exclude<T, 0 | "" | false | null | undefined> => !!x);
