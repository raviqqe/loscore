import { expect, it } from "vitest";
import { filterValues } from "./filter-values.js";
import { isString } from "./is-string.js";

it("filters values in an object", () => {
  expect(
    filterValues({ bar: 3, baz: 1, foo: 2 }, (value) => value % 2 === 0),
  ).toEqual({ foo: 2 });
});

it("filters values in an object into a different type", () => {
  expect(
    filterValues({ bar: 3, baz: 1, foo: "qux" }, isString) satisfies Record<
      string,
      string
    >,
  ).toEqual({
    foo: "qux",
  });
});
