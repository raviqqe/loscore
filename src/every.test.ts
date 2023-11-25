import { expect, it } from "vitest";
import { every } from "./every.js";

it("checks if values are all truthy", () => {
  expect(every([])).toBe(true);
  expect(every([false])).toBe(false);
  expect(every([true])).toBe(true);
  expect(every([42])).toBe(42);
  expect(every([true, false])).toBe(false);
  expect(every([true, true])).toBe(true);
  expect(every([true, 42])).toBe(42);
  expect(every([true, true, false])).toBe(false);
  expect(every([true, true, 42])).toBe(42);
});
