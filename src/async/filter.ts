export const filter: {
  // TODO How can we not tell lie to the type system...?
  <T, S extends T>(
    iterable: AsyncIterable<T>,
    check: (x: T) => x is S,
  ): AsyncIterable<S>;
  <T>(iterable: AsyncIterable<T>, check: (x: T) => unknown): AsyncIterable<T>;
} = async function* <T>(
  iterable: AsyncIterable<T>,
  check: (x: T) => unknown,
): AsyncIterable<T> {
  for await (const x of iterable) {
    if (check(x)) {
      yield x;
    }
  }
};
