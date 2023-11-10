export const compact = <T>(xs: (T | 0 | "" | null | undefined)[]): T[] =>
  xs.filter((x): x is T => !!x);
