import { describe, expect, it } from "vitest";
import { interleave } from "./interleave.js";

const interleaveToArray = (...args: Parameters<typeof interleave>) => [
  ...interleave(...args),
];

describe(interleave.name, () => {
  it("interleaves a separator", async () => {
    expect(interleaveToArray([], null)).toEqual([]);
    expect(interleaveToArray([1], null)).toEqual([1]);
    expect(interleaveToArray([1, 2], null)).toEqual([1, null, 2]);
    expect(interleaveToArray([1, 2, 3], null)).toEqual([1, null, 2, null, 3]);
  });

  it("interleaves a separator with a function", async () => {
    expect(interleaveToArray([1, 2, 3], (index) => index + 42)).toEqual([
      1, 42, 2, 43, 3,
    ]);
  });
});
