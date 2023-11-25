export const zip = function* <T, S>(
  xs: Iterable<T>,
  ys: Iterable<S>,
): Iterable<[T, S]> {
  const xsIterator = xs[Symbol.iterator]();
  const ysIterator = ys[Symbol.iterator]();

  while (true) {
    const xResult = xsIterator.next();
    const yResult = ysIterator.next();

    if (xResult.done || yResult.done) {
      break;
    }

    yield [xResult.value, yResult.value];
  }
};
