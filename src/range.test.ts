import { expect, it } from "vitest";
import { range } from "./range.js";

it("iterates over a range", () => {
  expect([...range(3)]).toEqual([0, 1, 2]);
});

it("iterates over a range with a start", () => {
  expect([...range(0, 3)]).toEqual([0, 1, 2]);
});

it("iterates over a range with a step", () => {
  expect([...range(0, 10, 2)]).toEqual([0, 2, 4, 6, 8]);
});

it("does not include an end", () => {
  expect([...range(3)]).toEqual([0, 1, 2]);
});

it("iterates over a range with a negative step", () => {
  expect([...range(3, 0, -1)]).toEqual([3, 2, 1]);
});
