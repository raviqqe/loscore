export const filter = async function* <T, S extends T = T>(
  iterable: AsyncIterable<T>,
  check: (x: T) => x is S,
): AsyncIterable<T> {
  for await (const x of iterable) {
    if (check(x)) {
      yield x;
    }
  }
};
