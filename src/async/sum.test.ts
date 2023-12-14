import { expect, it } from "vitest";
import { sum } from "./sum.js";

it("sums up no number", async () => {
  expect(await sum((async function* () {})())).toBe(0);
});

it("sums up numbers", async () => {
  expect(
    await sum(
      (async function* () {
        yield* [1, 2, 3];
      })(),
    ),
  ).toBe(6);
});
