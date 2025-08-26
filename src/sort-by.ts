import type { SortKey } from "./sort-key.js";

export const sortBy = <T>(array: T[], test: (value: T) => SortKey): T[] => {
  const keys = new Map<T, ReturnType<typeof test>>();
  const convertToKey = (value: T) => {
    if (!keys.has(value)) {
      keys.set(value, test(value));
    }

    return keys.get(value)!;
  };

  return array.sort((x, y) => (convertToKey(x) < convertToKey(y) ? -1 : 1));
};
