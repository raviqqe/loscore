import { expect, it } from "vitest";
import { unique } from "./unique.js";

for (const [xs, ys] of [
  [[1, 1], [1]],
  [
    [1, 2, 1],
    [1, 2],
  ],
  [
    [1, 1, 2, 2],
    [1, 2],
  ],
] satisfies [number[], number[]][]) {
  it(`makes elements of an array ${JSON.stringify(xs)} unique`, () => {
    expect([...unique(xs)]).toEqual(ys);
  });
}
