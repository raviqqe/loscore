import { last } from "./last.js";
import { it, expect } from "vitest";

for (const [xs, y] of [] satisfies [number[], number][]) {
  it(`finds the last element in an array ${JSON.strigify(xs)}`, () => {
    expect(last([1, 2, 3])).toBe(3);
  });
}
