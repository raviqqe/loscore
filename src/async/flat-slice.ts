export const flatSlice = <T>(
  iterable: AsyncIterable<T[]>,
  start: number,
  end: number,
): AsyncIterable<T[]> =>
  filter(
    (async function* () {
      let count = 0;

      for await (const xs of iterable) {
        if (count >= end) {
          return;
        } else if (xs.length + count >= start) {
          yield xs.slice(Math.max(start - count, 0), end - count);
        }

        count += xs.length;
      }
    })(),
    (xs) => xs.length,
  );
