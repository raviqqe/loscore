export const every = <T>(iterable: Iterable<T>): T | boolean => {
  let result: T | boolean = true;

  for (const value of iterable) {
    if (!value) {
      return false;
    }

    result = value;
  }

  return result;
};
