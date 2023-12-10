export const some = <T>(iterable: Iterable<T>): T | false => {
  for (const value of iterable) {
    if (value) {
      return value;
    }
  }

  return false;
};
