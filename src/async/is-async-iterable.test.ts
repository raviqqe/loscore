import { expect, it } from "vitest";
import { isAsyncIterable } from "./is-async-iterable.js";

it("checks an async iterable", () => {
  expect(isAsyncIterable((async function* () {})())).toBe(true);
});

it("checks an iterable", () => {
  expect(isAsyncIterable((function* () {})())).toBe(false);
});

it("checks an object", () => {
  expect(isAsyncIterable({})).toBe(false);
});

it("checks null", () => {
  expect(isAsyncIterable(null)).toBe(false);
});

it("checks undefined", () => {
  expect(isAsyncIterable(undefined)).toBe(false);
});
