import { expect, it } from "vitest";
import { toUint8Array } from "./to-uint8-array.js";
import { toStream } from "./to-stream.js";

it("accumulates no array", async () => {
  expect(await toUint8Array(new ReadableStream())).toEqual(new Uint8Array());
});

it("accumulates arrays", async () => {
  expect(
    await toUint8Array(
      toStream(
        (async function* () {
          yield new Uint8Array([1]);
          yield new Uint8Array([2, 3]);
          yield new Uint8Array([4, 5, 6]);
        })(),
      ),
    ),
  ).toEqual(new Uint8Array());
});
