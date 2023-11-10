import { expect, it } from "vitest";
import { capitalize } from "./capitalize.js";

it("capitalizes an empty string", () => {
  expect(capitalize("")).toBe("");
});

it("capitalizes a one-letter string", () => {
  expect(capitalize("A")).toBe("A");
});

it("capitalizes a two-letter string", () => {
  expect(capitalize("ab")).toBe("Ab");
});
