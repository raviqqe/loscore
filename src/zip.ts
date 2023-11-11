export const zip = function* <T, S>(xs: T[], ys: S[]): Iterable<[T, S]> {
  for (const [index, x] of xs.slice(0, ys.length).entries()) {
    yield [x, ys[index]!];
  }
};
