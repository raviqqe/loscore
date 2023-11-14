import { expect, it } from "vitest";
import { filter } from "./filter.js";
import { toArray } from "./to-array.js";

it("slices an empty iterable", async () => {
  expect(await toArray(filter((async function* () {})(), () => true))).toEqual(
    [],
  );
});

it("slices an iterable with an element", async () => {
  const createIterable = async function* () {
    yield 1;
  };

  expect(await toArray(filter(createIterable(), (x) => x > 1))).toEqual([]);
  expect(await toArray(filter(createIterable(), (x) => x <= 1))).toEqual([1]);
});

it("slices an iterable with two elements", async () => {
  const createIterable = async function* () {
    yield 1;
    yield 2;
  };

  expect(await toArray(filter(createIterable(), (x) => x < 2))).toEqual([1]);
  expect(await toArray(filter(createIterable(), (x) => x > 1))).toEqual([2]);
});
