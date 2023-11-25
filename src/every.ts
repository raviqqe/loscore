export const every = (xs: Iterable<unknown>) => {
  for (const x of xs) {
    if (!x) {
      return false;
    }
  }

  return true;
};
