export const zip = function* <T, S>(
  iterable1: Iterable<T>,
  iterable2: Iterable<S>,
): Iterable<[T, S]> {
  const iterator1 = iterable1[Symbol.iterator]();
  const iterator2 = iterable2[Symbol.iterator]();

  while (true) {
    const result1 = iterator1.next();
    const result2 = iterator2.next();

    if (result1.done || result2.done) {
      break;
    }

    yield [result1.value, result2.value];
  }
};
