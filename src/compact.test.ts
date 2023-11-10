import { it, expect } from "vitest";
import { compact } from "./compact.js";

for (const [xs, y] of [
  [[0], []],
  [[""], []],
  [[undefined], []],
  [[null], []],
  [[false], []],
  [
    [-1, 0, 1],
    [-1, 1],
  ],
] satisfies [unknown[], unknown[]][]) {
  it(`finds the last element in an array ${JSON.stringify(xs)}`, () => {
    const zs: unknown[] = xs;

    expect(compact(zs)).toEqual(y);
  });
}
