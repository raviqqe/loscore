import { expect, it } from "vitest";
import { groupBy } from "./group-by.js";

it("groups values with number keys", () => {
  expect(groupBy([1, 2, 3, 4], (x) => x % 2)).toEqual({ 0: [2, 4], 1: [1, 3] });
});

it("groups values with string keys", () => {
  expect(
    groupBy(["apple", "pine", "lemon", "almond", "leek"], (x) => x[0] ?? ""),
  ).toEqual({
    a: ["apple", "almond"],
    l: ["lemon", "leek"],
    p: ["pine"],
  });
});
