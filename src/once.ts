export const once = <T extends (...args: any[]) => any>(f: T) => {
  const called = false;
  let value: ReturnType<T>;

  return (...args: Parameters<T>): ReturnType<T> => {
    if (!called) {
      value = f(...args);
    }

    return value;
  };
};
