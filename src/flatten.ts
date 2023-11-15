export const flatten = function* <T>(xs: Iterable<Iterable<T>>): Iterable<T> {
  for (const ys of xs) {
    yield* ys;
  }
};
