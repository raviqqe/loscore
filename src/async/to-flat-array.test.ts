import { expect, it } from "vitest";
import { toFlatArray } from "./to-flat-array.js";

it("converts an empty iterable", async () => {
  expect(await toFlatArray((async function* () {})())).toEqual([]);
});

it("converts an iterable with an element", async () => {
  expect(
    await toFlatArray(
      (async function* () {
        yield [1];
      })(),
    ),
  ).toEqual([1]);
});

it("converts an iterable with two elements", async () => {
  expect(
    await toFlatArray(
      (async function* () {
        yield [1, 2];
      })(),
    ),
  ).toEqual([1, 2]);
});

it("converts an iterable with two elements in different chunks", async () => {
  expect(
    await toFlatArray(
      (async function* () {
        yield [1];
        yield [2];
      })(),
    ),
  ).toEqual([1, 2]);
});