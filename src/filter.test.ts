import { expect, it } from "vitest";
import { filter } from "./filter.js";

it("filters elements", () => {
  expect([...filter([1, 2, 3, 4], (x) => x % 2 === 0)]).toEqual([2, 4]);
});
