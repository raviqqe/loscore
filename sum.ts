export const sum = (xs: Iterable<number>): number => {
  let y = 0;

  for (const x of xs) {
    y += x;
  }

  return y;
};
