export const every = <T>(xs: Iterable<T>): T | boolean => {
  let y: T | boolean = true;

  for (const x of xs) {
    if (!x) {
      return false;
    }

    y = x;
  }

  return y;
};
