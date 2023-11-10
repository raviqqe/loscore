import { expect, it } from "vitest";
import { shuffle } from "./shuffle.js";

it("keeps all elements in the original array", () => {
  expect(new Set(shuffle([1, 2, 3]))).toEqual(new Set([1, 2, 3]));
});
