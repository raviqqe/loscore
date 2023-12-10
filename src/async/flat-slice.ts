import { filter } from "./filter.js";

// TODO Replace with flatten.
export const flatSlice = <T>(
  iterable: AsyncIterable<T[]>,
  start: number,
  end: number,
): AsyncIterable<T[]> =>
  filter(
    (async function* () {
      let count = 0;

      for await (const array of iterable) {
        if (count >= end) {
          return;
        } else if (array.length + count >= start) {
          yield array.slice(Math.max(start - count, 0), end - count);
        }

        count += array.length;
      }
    })(),
    (array) => array.length,
  );
