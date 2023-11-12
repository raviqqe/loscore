import { expect, it } from "vitest";
import { defer } from "./defer.js";

it("defers a value", async () => {
  let x = 0;

  const callback = defer(async () => x++);

  expect(await callback()).toBe(0);
  expect(await callback()).toBe(0);
  expect(await callback()).toBe(1);
  expect(await callback()).toBe(2);
});

it("defers values with different arguments", async () => {
  let y = 0;

  const callback = defer(async (x: number) => x + y++);

  expect(await callback(1)).toBe(1);
  expect(await callback(2)).toBe(3);
  expect(await callback(1)).toBe(1);
  expect(await callback(2)).toBe(3);
  expect(await callback(1)).toBe(3);
  expect(await callback(2)).toBe(5);
  expect(await callback(1)).toBe(5);
  expect(await callback(2)).toBe(7);
});
