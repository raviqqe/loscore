export const every = <T>(iterable: Iterable<T>): boolean | T => {
  let result: boolean | T = true;

  for (const value of iterable) {
    if (!value) {
      return false;
    }

    result = value;
  }

  return result;
};
