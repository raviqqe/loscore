import { expect, it } from "vitest";
import { map } from "./map.js";
import { toArray } from "./to-array.js";

it("maps a function to nothing", async () => {
  expect(await toArray(map((async function* () {})(), () => true))).toEqual([]);
});

it("maps a function to values", async () => {
  expect(
    await toArray(
      map(
        (async function* () {
          yield 2;
          yield 3;
        })(),
        (x) => x * x,
      ),
    ),
  ).toEqual([4, 9]);
});
