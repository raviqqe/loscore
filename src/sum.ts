import { fold } from "./fold.js";

export const sum = (iterable: Iterable<number>): number =>
  fold(iterable, 0, (x, y) => x + y);
