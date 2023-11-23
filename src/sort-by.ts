import { SortKey } from "./sort-key.js";

export const sortBy = <T>(xs: T[], f: (x: T) => SortKey): T[] => {
  const keys = new Map<T, ReturnType<typeof f>>();
  const g = (x: T) => {
    if (!keys.has(x)) {
      keys.set(x, f(x));
    }

    return keys.get(x)!;
  };

  return xs.sort((x, y) => (g(x) < g(y) ? -1 : 1));
};
