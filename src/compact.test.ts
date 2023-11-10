import { it, expect } from "vitest";
import { compact } from "./compact.js";

for (const [xs, y] of [
  [[0], []],
  [[undefined], []],
  [[null], []],
  [[false], []],
] satisfies [unknown[], unknown[]][]) {
  it(`finds the last element in an array ${JSON.stringify(xs)}`, () => {
    expect(compact(xs)).toBe(y);
  });
}
