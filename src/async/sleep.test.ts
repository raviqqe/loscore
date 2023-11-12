import { it } from "vitest";
import { sleep } from "./async/sleep.js";

it("sleeps", async () => {
  await sleep(0);
});
