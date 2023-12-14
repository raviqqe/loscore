import { toArray } from "./to-array.js";

export const collectString = async (
  iterable: AsyncIterable<string>,
): Promise<string> => (await toArray(iterable)).join("");
