import { it, expect } from "vitest";
import { once } from "./once.js";

it("calls a function twice", () => {
  let x = 0;
  const f = once(() => {
    x++;
  });

  f();

  expect(x).toBe(1);

  f();

  expect(x).toBe(1);
});
