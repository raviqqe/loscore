export const interleave = function* <T, S>(
  array: T[],
  separator: S | ((index: number) => S),
): Iterable<T | S> {
  for (const [index, value] of array.entries()) {
    yield value;

    if (index !== array.length - 1) {
      yield separator instanceof Function ? separator(index) : separator;
    }
  }
};
