export const zip = function* <T, S>(
  xs: Iterable<T>,
  ys: Iterable<S>,
): Iterable<[T, S]> {
  const xIterator = xs[Symbol.iterator]();
  const yIterator = ys[Symbol.iterator]();

  while (true) {
    const x = xIterator.next();
    const y = yIterator.next();

    if (x.done || y.done) {
      break;
    }

    yield [x.value, y.value];
  }
};
