export const once = <T extends unknown[], S>(
  f: (...args: T) => S,
): ((...args: T) => S) => {
  let called = false;
  let value: S;

  return (...args: T): S => {
    if (!called) {
      called = true;
      value = f(...args);
    }

    return value;
  };
};
