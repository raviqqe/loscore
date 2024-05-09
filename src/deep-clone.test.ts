import { expect, it } from "vitest";
import { deepClone } from "./deep-clone.js";

for (const x of [
  undefined,
  null,
  false,
  true,
  42,
  [],
  [1, 2, 3],
  {},
  { foo: null },
  { bar: null, foo: null },
  { bar: null, foo: [1, 2, { foo: 42 }] },
]) {
  it("clone a value", () => {
    expect(deepClone(x)).toEqual(x);
  });
}
