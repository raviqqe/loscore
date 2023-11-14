import { expect, it } from "vitest";
import { toArray } from "./to-array.js";

it("converts an empty iterable", async () => {
  expect(await toArray((async function* () {})())).toEqual([]);
});

it("converts an iterable with an element", async () => {
  expect(
    await toArray(
      (async function* () {
        yield 1;
      })(),
    ),
  ).toEqual([1]);
});

it("converts an iterable with two elements", async () => {
  expect(
    await toArray(
      (async function* () {
        yield 1;
        yield 2;
      })(),
    ),
  ).toEqual([1, 2]);
});
