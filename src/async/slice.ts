export const slice = async function* <T>(
  iterable: AsyncIterable<T>,
  start: number,
  end: number,
): AsyncIterable<T> {
  let count = 0;

  for await (const x of iterable) {
    if (count >= end) {
      return;
    } else if (count >= start) {
      yield x;
    }

    count++;
  }
};
