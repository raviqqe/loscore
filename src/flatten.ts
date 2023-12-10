export const flatten = function* <T>(
  iterable: Iterable<Iterable<T>>,
): Iterable<T> {
  for (const child of iterable) {
    yield* child;
  }
};
