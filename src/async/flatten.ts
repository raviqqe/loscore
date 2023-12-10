import { type GeneralIterable } from "./general-iterable.js";

export const flatten = async function* <T>(
  iterable: GeneralIterable<GeneralIterable<T>>,
): AsyncIterable<T> {
  for await (const child of iterable) {
    yield* child;
  }
};
