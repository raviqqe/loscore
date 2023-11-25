import { expect, it } from "vitest";
import { some } from "./some.js";

it("checks if there is at least a truthy value", () => {
  expect(some([])).toBe(false);
  expect(some([false])).toBe(false);
  expect(some([true])).toBe(true);
  expect(some([42])).toBe(42);
  expect(some([false, false])).toBe(false);
  expect(some([false, true])).toBe(true);
  expect(some([false, 42])).toBe(42);
  expect(some([false, false, true])).toBe(true);
  expect(some([false, true, false])).toBe(true);
});
