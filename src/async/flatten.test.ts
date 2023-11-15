import { expect, it } from "vitest";
import { flatten } from "./flatten.js";
import { toArray } from "./to-array.js";

it("flattens values", () => {
  expect(
    toArray(
      flatten([
        [1, 2],
        [3, 4],
      ]),
    ),
  ).toEqual([1, 2, 3, 4]);
});
