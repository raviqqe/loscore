import { identity } from "./identity.js";

export const compact = <T>(
  xs: T[],
): Exclude<T, 0 | "" | false | null | undefined>[] =>
  xs.filter(identity) as Exclude<T, 0 | "" | false | null | undefined>[];
