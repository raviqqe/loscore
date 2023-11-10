export const sortBy = <T>(xs: T[], f: (x: T) => never): T[] => {
  const keys = new Set();
  const g = (x: T) => {
    if (keys.has(x)) return x;

    const key = f(x);
    keys.add(key);
    return key;
  };

  return xs.sort((x, y) => (g(x) < g(y) ? -1 : 1));
};
