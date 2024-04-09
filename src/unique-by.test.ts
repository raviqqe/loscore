import { expect, it } from "vitest";
import { uniqueBy } from "./unique-by.js";

for (const [input, output] of [
  [[1, 1], [1]],
  [
    [1, 2, 1],
    [1, 2],
  ],
  [
    [1, 1, 2, 2],
    [1, 2],
  ],
  [
    [0, 1, 2, 3],
    [0, 2],
  ],
] satisfies [number[], number[]][]) {
  it(`makes elements of an array ${JSON.stringify(input)} unique`, () => {
    expect([...uniqueBy(input, (value) => Math.floor(value / 2))]).toEqual(
      output,
    );
  });
}
