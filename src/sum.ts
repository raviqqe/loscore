export const sum = (iterable: Iterable<number>): number => {
  let sum = 0;

  for (const value of iterable) {
    sum += value;
  }

  return sum;
};
