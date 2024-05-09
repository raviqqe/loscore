import { expect, it } from "vitest";
import { deepEqual } from "./deep-equal.js";

for (const [x, y] of [
  [undefined, undefined],
  [null, null],
  [false, false],
  [true, true],
  [42, 42],
  [[], []],
  [
    [1, 2, 3],
    [1, 2, 3],
  ],
  [{}, {}],
  [{ foo: null }, { foo: null }],
  [
    { bar: null, foo: null },
    { bar: null, foo: null },
  ],
]) {
  it("compares equivalent values", () => {
    expect(deepEqual(x, y)).toBe(true);
  });
}

for (const [x, y] of [
  [undefined, null],
  [false, 0],
  [[], [1]],
  [[1], []],
  [
    [1, 2],
    [1, 2, 3],
  ],
  [{ foo: null }, {}],
  [{ foo: null }, { bar: null, foo: null }],
]) {
  it("compares different values", () => {
    expect(deepEqual(x, y)).toBe(false);
  });
}
