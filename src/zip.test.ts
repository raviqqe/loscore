import { expect, it } from "vitest";
import { zip } from "./zip.js";

it("zips two arrays", () => {
  expect([...zip([1, 2, 3], [4, 5, 6])]).toEqual([
    [1, 4],
    [2, 5],
    [3, 6],
  ]);
});
