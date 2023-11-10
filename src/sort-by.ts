export type SortKey = string | number | boolean | SortKey[];

export const sortBy = <T>(xs: T[], f: (x: T) => SortKey): T[] => {
  const keys = new Map();
  const g = (x: T) => {
    if (keys.has(x)) {
      return keys.get(x);
    }

    const value = f(x);
    keys.set(x, value);
    return value;
  };

  return xs.sort((x, y) => (g(x) < g(y) ? -1 : 1));
};
