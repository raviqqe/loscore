import { expect, it } from "vitest";
import { toArray } from "./to-array.js";
import { toIterable } from "./to-iterable.js";

it("converts a stream into iterable", async () => {
  expect(
    await toArray(
      toIterable(
        new ReadableStream({
          start: (controller) => {
            controller.enqueue(1);
            controller.enqueue(2);
            controller.enqueue(3);
            controller.close();
          },
        }),
      ),
    ),
  ).toEqual([1, 2, 3]);
});
