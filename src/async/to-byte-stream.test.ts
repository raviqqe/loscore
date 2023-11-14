import { expect, it } from "vitest";
import { toArray } from "./to-array.js";
import { toByteStream } from "./to-byte-stream.js";
import { toIterable } from "./to-iterable.js";
import { toStringStream } from "./to-string-stream.js";

it("converts byte stream to string stream", async () => {
  expect(
    await toArray(
      toIterable(
        toStringStream(
          toByteStream(
            new ReadableStream({
              start: (controller) => {
                controller.enqueue("foo");
                controller.enqueue("bar");
                controller.enqueue("baz");
                controller.close();
              },
            }),
          ),
        ),
      ),
    ),
  ).toEqual(["foo", "bar", "baz"]);
});
