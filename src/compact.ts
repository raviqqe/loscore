import { isTruthy } from "./is-truthy.js";

export const compact = <T>(
  xs: T[],
): Exclude<T, 0 | "" | false | null | undefined>[] => xs.filter(isTruthy);
