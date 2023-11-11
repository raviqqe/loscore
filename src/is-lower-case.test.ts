import { expect, it } from "vitest";
import { isLowerCase } from "./is-lower-case.js";

it("checks if a text is in lower case", () => {
  expect(isLowerCase("")).toBe(true);
  expect(isLowerCase("a")).toBe(true);
  expect(isLowerCase("A")).toBe(false);
  expect(isLowerCase("aA")).toBe(false);
});
