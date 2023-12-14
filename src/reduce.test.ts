import { expect, it } from "vitest";
import { reduce } from "./reduce.js";

for (const [values, value] of [
  [[], undefined],
  [[1], 1],
  [[1, 2], 3],
  [[1, 2, 3], 6],
] satisfies [number[], number | undefined][]) {
  it(`reduces values, ${JSON.stringify(values)}`, () => {
    expect(reduce(values, (x, y) => x + y)).toBe(value);
  });
}
