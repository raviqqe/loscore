import { expect, it } from "vitest";
import { sortBy } from "./sort-by.js";

it("sorts objects by a property", () => {
  expect(sortBy([{ foo: 3 }, { foo: 1 }, { foo: 2 }], (x) => x.foo)).toEqual([
    { foo: 1 },
    { foo: 2 },
    { foo: 3 },
  ]);
});

it("reverses an array of numbers", () => {
  expect(sortBy([1, 2, 3], (x) => -x)).toEqual([3, 2, 1]);
});

it("calclates a key only once", () => {
  let called = new Set();

  expect(
    sortBy([1, 2, 3, 1, 2, 3], (x) => {
      expect(called.has(x)).toBe(false);
      return x;
    }),
  ).toEqual([1, 1, 2, 2, 3, 3]);
});
