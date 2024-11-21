import { filter } from "./filter.js";
import { isTruthy } from "./is-truthy.js";

export const compact = <T>(
  iterable: Iterable<T>,
): Iterable<Exclude<T, 0 | "" | false | null | undefined>> =>
  filter(iterable, isTruthy);
