import { range } from "./range.js";

export const shuffle = <T>(array: T[]): T[] => {
  array = [...array];

  for (const index of range(array.length)) {
    const targetIndex =
      index + Math.floor(Math.random() * (array.length - index));
    // biome-ignore lint/style/noNonNullAssertion: Bounded index
    const x = array[targetIndex]!;
    // biome-ignore lint/style/noNonNullAssertion: Bounded index
    array[targetIndex] = array[index]!;
    array[index] = x;
  }

  return array;
};
