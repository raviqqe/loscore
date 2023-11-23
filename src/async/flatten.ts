import { GeneralIterable } from "./general-iterable.js";

export const flatten = async function* <T>(
  xs: GeneralIterable<GeneralIterable<T>>,
): AsyncIterable<T> {
  for await (const ys of xs) {
    yield* ys;
  }
};
