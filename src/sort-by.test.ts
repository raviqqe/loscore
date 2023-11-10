import { expect, it } from "vitest";
import { sortBy } from "./sort-by.js";

it("sorts objects by a property", () => {
  expect(sortBy([{ foo: 3 }, { foo: 1 }, { foo: 2 }], (x) => x.foo)).toEqual([
    { foo: 1 },
    { foo: 2 },
    { foo: 3 },
  ]);
});
