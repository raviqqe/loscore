import { range } from "./range.js";

export const shuffle = <T>(array: T[]): T[] => {
  array = [...array];

  for (const index of range(array.length)) {
    const targetIndex =
      index + Math.floor(Math.random() * (array.length - index));
    const x = array[targetIndex]!;
    array[targetIndex] = array[index]!;
    array[index] = x;
  }

  return array;
};
