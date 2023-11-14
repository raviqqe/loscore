export const range = function* (
  start: number,
  end?: number,
  step = 1,
): Iterable<number> {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  while (step > 0 ? start < end : start > end) {
    yield start;
    start += step;
  }
};
