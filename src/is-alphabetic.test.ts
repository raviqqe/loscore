import { expect, it } from "vitest";
import { isAlphabetic } from "./is-alphabetic.js";

it("detects if a string is alphabetic", () => {
  expect(isAlphabetic("")).toBe(true);
  expect(isAlphabetic("a")).toBe(true);
  expect(isAlphabetic("A")).toBe(true);
  expect(isAlphabetic("α")).toBe(true);
  expect(isAlphabetic("Α")).toBe(true);
  expect(isAlphabetic(" ")).toBe(false);
  expect(isAlphabetic("あ")).toBe(false);
  expect(isAlphabetic(",")).toBe(false);
  expect(isAlphabetic("aa")).toBe(true);
  expect(isAlphabetic("a ")).toBe(false);
});
