export const filter: {
  // TODO How can we not tell lie to the type system...?
  <T, S extends T = T>(xs: Iterable<T>, f: (x: T) => x is S): Iterable<S>;
  <T>(xs: Iterable<T>, f: (x: T) => unknown): Iterable<T>;
} = function* <T>(xs: Iterable<T>, f: (x: T) => unknown): Iterable<T> {
  for (const x of xs) {
    if (f(x)) {
      yield x;
    }
  }
};
