import { range } from "./range.js";

export const shuffle = <T>(xs: T[]): T[] => {
  xs = [...xs];

  for (const index of range(xs.length)) {
    const targetIndex = index + Math.floor(Math.random() * (xs.length - index));
    const x = xs[targetIndex]!;
    xs[targetIndex] = xs[index]!;
    xs[index] = x;
  }

  return xs;
};
