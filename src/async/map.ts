export const map = async function* <T, S>(
  iterable: AsyncIterable<T>,
  callback: (x: T) => S,
): AsyncIterable<S> {
  for await (const x of iterable) {
    yield callback(x);
  }
};
