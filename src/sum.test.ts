import { expect, it } from "vitest";
import { sum } from "./sum.js";

it("sums up no number", () => {
  expect(sum([])).toBe(0);
});

it("sums up numbers", () => {
  expect(sum([1, 2, 3])).toBe(6);
});
