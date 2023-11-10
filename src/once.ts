export const once = <T extends (...args: any[]) => any>(f: T) => {
  let called = false;
  let value: ReturnType<T>;

  return (...args: Parameters<T>): ReturnType<T> => {
    if (!called) {
      called = true;
      value = f(...args);
    }

    return value;
  };
};
