import { expect, it } from "vitest";
import { flatten } from "./flatten.js";

it("flattens values", () => {
  expect([
    ...flatten([
      [1, 2],
      [3, 4],
    ]),
  ]).toEqual([1, 2, 3, 4]);
});
