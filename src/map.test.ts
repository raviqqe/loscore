import { expect, it } from "vitest";
import { map } from "./map.js";

it("maps a function to elements", () => {
  expect([...map([1, 2, 3], (x) => x * x)]).toEqual([1, 4, 9]);
});
