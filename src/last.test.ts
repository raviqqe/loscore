import { last } from "./last.js";
import { it, expect } from "vitest";

for (const [xs, y] of [[[1, 2, 3], 3]] satisfies [number[], number][]) {
  it(`finds the last element in an array ${JSON.stringify(xs)}`, () => {
    expect(last(xs)).toBe(y);
  });
}
