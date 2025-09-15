import { expect, it } from "vitest";
import { slice } from "./slice.js";

it("slices an empty iterable", async () => {
  expect(await Array.fromAsync(slice((async function* () {})(), 0, 0))).toEqual(
    [],
  );
});

it("slices an iterable with an element", async () => {
  const createIterable = async function* () {
    yield 1;
  };

  expect(await Array.fromAsync(slice(createIterable(), 0, 0))).toEqual([]);
  expect(await Array.fromAsync(slice(createIterable(), 0, 1))).toEqual([1]);
  expect(await Array.fromAsync(slice(createIterable(), 1, 1))).toEqual([]);
});

it("slices an iterable with two elements", async () => {
  const createIterable = async function* () {
    yield 1;
    yield 2;
  };

  expect(await Array.fromAsync(slice(createIterable(), 0, 0))).toEqual([]);
  expect(await Array.fromAsync(slice(createIterable(), 0, 1))).toEqual([1]);
  expect(await Array.fromAsync(slice(createIterable(), 0, 2))).toEqual([1, 2]);
  expect(await Array.fromAsync(slice(createIterable(), 1, 1))).toEqual([]);
  expect(await Array.fromAsync(slice(createIterable(), 1, 2))).toEqual([2]);
  expect(await Array.fromAsync(slice(createIterable(), 2, 2))).toEqual([]);
});
