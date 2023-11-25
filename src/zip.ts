export const zip = function* <T, S>(
  xs: Iterable<T>,
  ys: Iterable<S>,
): Iterable<[T, S]> {
  const xIterator = xs[Symbol.iterator]();
  const yIterator = ys[Symbol.iterator]();

  while (true) {
    const x = xIterator.next();
    const y = yIterator.next();

    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    if (x.done || y.done) {
      break;
    }

    yield [x.value, y.value];
  }
};
