export const interleave = function* <T, S>(
  xs: T[],
  separator: S | ((index: number) => S),
): Iterable<T | S> {
  for (const [index, value] of xs.entries()) {
    yield value;

    if (index !== xs.length - 1) {
      yield separator instanceof Function ? separator(index) : separator;
    }
  }
};
