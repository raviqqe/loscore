export const interleave = function* <T, S>(
  array: T[],
  separator: ((index: number) => S) | S,
): Iterable<S | T> {
  for (const [index, value] of array.entries()) {
    yield value;

    if (index !== array.length - 1) {
      yield separator instanceof Function ? separator(index) : separator;
    }
  }
};
