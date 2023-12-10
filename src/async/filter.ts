export const filter: {
  // TODO How can we not tell lie to the type system...?
  <T, S extends T>(
    iterable: AsyncIterable<T>,
    check: (value: T) => value is S,
  ): AsyncIterable<S>;
  <T>(
    iterable: AsyncIterable<T>,
    check: (value: T) => unknown,
  ): AsyncIterable<T>;
} = async function* <T>(
  iterable: AsyncIterable<T>,
  check: (value: T) => unknown,
): AsyncIterable<T> {
  for await (const value of iterable) {
    if (check(value)) {
      yield value;
    }
  }
};
