export const map = async function* <T, S>(
  iterable: AsyncIterable<T>,
  convert: (value: T) => S,
): AsyncIterable<S> {
  for await (const x of iterable) {
    yield convert(x);
  }
};
