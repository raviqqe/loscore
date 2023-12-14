import { expect, it } from "vitest";
import { fold } from "./fold.js";

for (const [values, value] of [
  [[], 0],
  [[1], 1],
  [[1, 2], 3],
  [[1, 2, 3], 6],
] satisfies [number[], number][]) {
  it(`folds values, ${JSON.stringify(values)}`, () => {
    expect(fold(values, 0, (x, y) => x + y)).toBe(value);
  });
}
