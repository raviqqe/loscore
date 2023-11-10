export const range = function* (
  start: number,
  end?: number,
  step?: number,
): Iterable<number> {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  while (start < end) {
    yield start;
    start += step ?? 1;
  }
};
