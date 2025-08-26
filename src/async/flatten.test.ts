import { describe, expect, it } from "vitest";
import { flatten } from "./flatten.js";
import type { GeneralIterable } from "./general-iterable.js";
import { toArray } from "./to-array.js";

it("flattens values", async () => {
  expect(
    await toArray(
      flatten([
        [1, 2],
        [3, 4],
      ]),
    ),
  ).toEqual([1, 2, 3, 4]);
});

describe("flat array", () => {
  const toFlatArray = <T>(
    iterable: GeneralIterable<GeneralIterable<T>>,
  ): Promise<T[]> => toArray(flatten(iterable));

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
});
