export const range = function* (
  start: number,
  end?: number,
  step?: number,
): Iterator<number> {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  while (start < end) {
    yield start;
    start += step ?? 1;
  }
};
