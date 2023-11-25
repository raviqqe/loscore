export const some = <T>(xs: Iterable<T>): T | false => {
  for (const x of xs) {
    if (x) {
      return x;
    }
  }

  return false;
};
