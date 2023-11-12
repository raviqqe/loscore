import { expect, it } from "vitest";
import { toArray } from "./to-array.js";
import { flatSlice } from "./flat-slice.js";

it("slices an empty iterable", async () => {
  expect(await toArray(flatSlice((async function* () {})(), 0, 0))).toEqual([]);
});

it("slices an iterable with an element", async () => {
  const createIterable = async function* () {
    yield [1];
  };

  expect(await toArray(flatSlice(createIterable(), 0, 0))).toEqual([]);
  expect(await toArray(flatSlice(createIterable(), 0, 1))).toEqual([[1]]);
  expect(await toArray(flatSlice(createIterable(), 1, 1))).toEqual([]);
});

it("slices an iterable with two elements", async () => {
  const createIterable = async function* () {
    yield [1];
    yield [2];
  };

  expect(await toArray(flatSlice(createIterable(), 0, 0))).toEqual([]);
  expect(await toArray(flatSlice(createIterable(), 0, 1))).toEqual([[1]]);
  expect(await toArray(flatSlice(createIterable(), 0, 2))).toEqual([[1], [2]]);
  expect(await toArray(flatSlice(createIterable(), 1, 1))).toEqual([]);
  expect(await toArray(flatSlice(createIterable(), 1, 2))).toEqual([[2]]);
  expect(await toArray(flatSlice(createIterable(), 2, 2))).toEqual([]);
});

it("slices an iterable with two elements in a chunk", async () => {
  const createIterable = async function* () {
    yield [1, 2];
  };

  expect(await toArray(flatSlice(createIterable(), 0, 0))).toEqual([]);
  expect(await toArray(flatSlice(createIterable(), 0, 1))).toEqual([[1]]);
  expect(await toArray(flatSlice(createIterable(), 1, 2))).toEqual([[2]]);
});

it("slices an iterable within a chunk", async () => {
  const createIterable = async function* () {
    yield [1, 2, 3];
  };

  expect(await toArray(flatSlice(createIterable(), 1, 2))).toEqual([[2]]);
});

it("slices an iterable with four elements in two chunks", async () => {
  const createIterable = async function* () {
    yield [1, 2];
    yield [3, 4];
  };

  expect(await toArray(flatSlice(createIterable(), 0, 0))).toEqual([]);
  expect(await toArray(flatSlice(createIterable(), 0, 1))).toEqual([[1]]);
  expect(await toArray(flatSlice(createIterable(), 1, 1))).toEqual([]);
  expect(await toArray(flatSlice(createIterable(), 1, 2))).toEqual([[2]]);
  expect(await toArray(flatSlice(createIterable(), 1, 3))).toEqual([[2], [3]]);
  expect(await toArray(flatSlice(createIterable(), 1, 4))).toEqual([
    [2],
    [3, 4],
  ]);
  expect(await toArray(flatSlice(createIterable(), 2, 2))).toEqual([]);
  expect(await toArray(flatSlice(createIterable(), 2, 3))).toEqual([[3]]);
  expect(await toArray(flatSlice(createIterable(), 2, 4))).toEqual([[3, 4]]);
  expect(await toArray(flatSlice(createIterable(), 3, 3))).toEqual([]);
  expect(await toArray(flatSlice(createIterable(), 3, 4))).toEqual([[4]]);
});
