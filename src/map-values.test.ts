import { expect, it } from "vitest";
import { mapValues } from "./map-values.js";

it("maps values in an object", () => {
  expect(mapValues({ bar: 3, foo: 2 }, (x) => x * x)).toEqual({
    bar: 9,
    foo: 4,
  });
});

it("maps values in an object into a different type", () => {
  expect(mapValues({ bar: 3, foo: 2 }, String)).toEqual({ bar: "3", foo: "2" });
});
