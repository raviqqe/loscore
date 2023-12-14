import { expect, it } from "vitest";
import { collectString } from "./collect-string.js";

it("collects strings", async () => {
  expect(
    await collectString(
      (async function* () {
        yield "sa";
        yield "van";
        yield "na";
      })(),
    ),
  ).toEqual("savanna");
});
