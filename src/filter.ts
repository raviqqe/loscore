export const filter: {
  // TODO How can we not tell lie to the type system...?
  <T, S extends T = T>(
    iterable: Iterable<T>,
    test: (value: T) => value is S,
  ): Iterable<S>;
  <T>(iterable: Iterable<T>, test: (value: T) => unknown): Iterable<T>;
} = function* <T>(
  iterable: Iterable<T>,
  test: (value: T) => unknown,
): Iterable<T> {
  for (const value of iterable) {
    if (test(value)) {
      yield value;
    }
  }
};
