export const some = <T>(iterable: Iterable<T>): false | T => {
  for (const value of iterable) {
    if (value) {
      return value;
    }
  }

  return false;
};
