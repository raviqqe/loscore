import { fold } from "./fold.js";

export const collectString = async (
  iterable: AsyncIterable<string>,
): Promise<string> =>
  (
    await fold<string, string[]>(iterable, [], (accumulator, value) => {
      accumulator.push(value);
      return accumulator;
    })
  ).join("");
