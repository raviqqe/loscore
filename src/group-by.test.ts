import { expect, it } from "vitest";
import { groupBy } from "./group-by.js";

it("groups values", () => {
  expect(groupBy([1, 2, 3, 4], (x) => x % 2)).toEqual({ 0: [2, 4], 1: [1, 3] });
});
