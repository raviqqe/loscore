export const some = (xs: Iterable<unknown>) => {
  for (const x of xs) {
    if (x) {
      return true;
    }
  }

  return false;
};
