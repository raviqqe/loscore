import { it, expect } from "vitest";
import { last } from "./last.js";

for (const [xs, y] of [
  [[], undefined],
  [[1], 1],
  [[1, 2], 2],
  [[1, 2, 3], 3],
] satisfies [unknown[], unknown][]) {
  it(`finds the last element in an array ${JSON.stringify(xs)}`, () => {
    expect(last(xs)).toBe(y);
  });
}
