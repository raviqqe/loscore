import { expect, it } from "vitest";
import { flow } from "./flow.js";

it("runs functions", () => {
  expect(
    flow<number>(
      (x) => x + x,
      (x) => x * x,
    )(1),
  ).toBe(4);
});
