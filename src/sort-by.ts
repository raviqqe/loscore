import { type SortKey } from "./sort-key.js";

export const sortBy = <T>(array: T[], f: (element: T) => SortKey): T[] => {
  const keys = new Map<T, ReturnType<typeof f>>();
  const convertToKey = (element: T) => {
    if (!keys.has(element)) {
      keys.set(element, f(element));
    }

    return keys.get(element)!;
  };

  return array.sort((x, y) => (convertToKey(x) < convertToKey(y) ? -1 : 1));
};
