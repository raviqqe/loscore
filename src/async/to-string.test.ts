import { expect, it } from "vitest";
import { toStream } from "./to-stream.js";
import { toString } from "./to-string.js";

it("accumulates arrays", async () => {
  expect(
    await toString(
      toStream(
        (async function* () {
          yield "foo";
          yield "bar";
          yield "baz";
        })(),
      ),
    ),
  ).toEqual("foobarbaz");
});
