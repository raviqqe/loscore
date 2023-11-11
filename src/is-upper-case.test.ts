import { expect, it } from "vitest";
import { isUpperCase } from "./is-upper-case.js";

it("checks if a text is in upper case", () => {
  expect(isUpperCase("")).toBe(true);
  expect(isUpperCase("a")).toBe(false);
  expect(isUpperCase("A")).toBe(true);
  expect(isUpperCase("aA")).toBe(false);
});
