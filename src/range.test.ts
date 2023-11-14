import { expect, it } from "vitest";
import { range } from "./range.js";

it("iterates over a range", () => {
  let x = 0;

  for (const i of range(10)) {
    expect(i).toEqual(x++);
  }
});

it("iterates over a range with a start", () => {
  let x = 0;

  for (const i of range(0, 10)) {
    expect(i).toEqual(x++);
  }
});

it("iterates over a range with a step", () => {
  let x = 0;

  for (const i of range(0, 10, 2)) {
    expect(i).toEqual(x);
    x += 2;
  }
});

it("does not include an end", () => {
  expect([...range(3)]).toEqual([0, 1, 2]);
});

it("iterates over a range with a negative step", () => {
  expect([...range(3, 0, -1)]).toEqual([3, 2, 1]);
});
