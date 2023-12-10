export const flow =
  <T>(...array: ((value: T) => T)[]): ((value: T) => T) =>
  (value: T): T => {
    for (const convert of array) {
      value = convert(value);
    }

    return value;
  };
