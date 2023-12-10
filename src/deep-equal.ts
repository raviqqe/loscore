import { every } from "./every.js";
import { map } from "./map.js";
import { zip } from "./zip.js";

export const deepEqual = (one: unknown, other: unknown): boolean =>
  one === other ||
  (Array.isArray(one) && Array.isArray(other) && equalArrays(one, other)) ||
  (!!one && !!other && equalObjects(one, other));

const equalArrays = (one: unknown[], other: unknown[]): boolean =>
  one.length === other.length &&
  every(map(zip(one, other), ([one, other]) => deepEqual(one, other)));

const equalObjects = (one: object, other: object): boolean => {
  const keys = Object.keys(one);

  return (
    equalArrays(keys, Object.keys(other)) &&
    every(
      map(keys, (key) =>
        deepEqual(
          (one as Record<string, unknown>)[key],
          (other as Record<string, unknown>)[key],
        ),
      ),
    )
  );
};
