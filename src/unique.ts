export const unique = <T>(xs: T[]): T[] => {
  const ys = [];
  const set = new Set();

  for (const x of xs) {
    if (!set.has(x)) {
      ys.push(x);
      set.add(x);
    }
  }

  return ys;
};
