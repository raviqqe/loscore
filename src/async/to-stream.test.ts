import { expect, it } from "vitest";
import { toArray } from "./to-array.js";
import { toIterable } from "./to-iterable.js";
import { toStream } from "./to-stream.js";

it("converts iterable into a stream", async () => {
  expect(
    await toArray(
      toIterable(
        toStream(
          (async function* () {
            yield 1;
            yield 2;
            yield 3;
          })(),
        ),
      ),
    ),
  ).toEqual([1, 2, 3]);
});
