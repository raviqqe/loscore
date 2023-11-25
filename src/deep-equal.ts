import { every } from "./every.js";
import { map } from "./map.js";
import { zip } from "./zip.js";

export const deepEqual = (x: unknown, y: unknown): boolean =>
  x === y ||
  (Array.isArray(x) && Array.isArray(y) && equalArrays(x, y)) ||
  (!!x && !!y && equalObjects(x, y));

const equalArrays = (x: unknown[], y: unknown[]): boolean =>
  x.length === y.length && every(map(zip(x, y), ([x, y]) => deepEqual(x, y)));

const equalObjects = (x: object, y: object): boolean => {
  const keys = Object.keys(x);

  return (
    equalArrays(keys, Object.keys(y)) &&
    every(
      map(keys, (key) =>
        deepEqual(
          (x as Record<string, unknown>)[key],
          (y as Record<string, unknown>)[key],
        ),
      ),
    )
  );
};
