import { it, expect } from "vitest";
import { mapValues } from "./map-values.js";

it("maps values in an object", () => {
  expect(mapValues({ foo: 2, bar: 3 }, (x) => x * x)).toEqual({
    foo: 4,
    bar: 9,
  });
});

it("maps values in an object into a different type", () => {
  expect(mapValues({ foo: 2, bar: 3 }, String)).toEqual({ foo: "2", bar: "3" });
});
