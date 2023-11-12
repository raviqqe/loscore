export const toFlatArray = async <T>(
  iterable: AsyncIterable<T[]>,
): Promise<T[]> => {
  const values: T[] = [];

  for await (const xs of iterable) {
    values.push(...xs);
  }

  return values;
};
