import { it, expect } from "vitest";
import { mapValues } from "./map-values.js";

for (const [x, y] of [[{ foo: 2 }, { foo: 4 }]] satisfies [
  Record<string, unknown>,
  Record<string, unknown>,
][]) {
  it(`maps values in an object ${JSON.stringify(x)}`, () => {
    expect(mapValues(x, (x) => x * x)).toEqual(y);
  });
}
