import { fold } from "./fold.js";

export const sum = (iterable: AsyncIterable<number>): Promise<number> =>
  fold(iterable, 0, (x, y) => x + y);
