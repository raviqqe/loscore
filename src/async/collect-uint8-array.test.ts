import { expect, it } from "vitest";
import { collectUint8Array } from "./collect-uint8-array.js";

it("collects arrays", async () => {
  expect(
    await collectUint8Array(
      (async function* () {
        yield new Uint8Array([1]);
        yield new Uint8Array([2, 3]);
        yield new Uint8Array([4, 5, 6]);
      })(),
    ),
  ).toEqual(new Uint8Array([1, 2, 3, 4, 5, 6]));
});
