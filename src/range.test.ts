import { expect, it } from "vitest";
import { range } from "./range.js";

it("iterates over a range", () => {
  let x = 0;

  for (const i of range(10)) {
    expect(i).toEqual(x++);
  }
});
