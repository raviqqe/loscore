import { expect, it } from "vitest";
import { filter } from "./filter.js";

it("slices an empty iterable", async () => {
  expect(
    await Array.fromAsync(filter((async function* () {})(), () => true)),
  ).toEqual([]);
});

it("slices an iterable with an element", async () => {
  const createIterable = async function* () {
    yield 1;
  };

  expect(await Array.fromAsync(filter(createIterable(), (x) => x > 1))).toEqual(
    [],
  );
  expect(
    await Array.fromAsync(filter(createIterable(), (x) => x <= 1)),
  ).toEqual([1]);
});

it("slices an iterable with two elements", async () => {
  const createIterable = async function* () {
    yield 1;
    yield 2;
  };

  expect(await Array.fromAsync(filter(createIterable(), (x) => x < 2))).toEqual(
    [1],
  );
  expect(await Array.fromAsync(filter(createIterable(), (x) => x > 1))).toEqual(
    [2],
  );
});
