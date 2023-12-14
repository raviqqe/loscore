import { expect, it } from "vitest";
import { reduce } from "./reduce.js";

for (const [values, value] of [
  [[], undefined],
  [[1], 1],
  [[1, 2], 3],
  [[1, 2, 3], 6],
] satisfies [number[], number | undefined][]) {
  it(`reduces values, ${JSON.stringify(values)}`, async () => {
    expect(
      await reduce(
        (async function* () {
          yield* values;
        })(),
        (x, y) => x + y,
      ),
    ).toBe(value);
  });
}
