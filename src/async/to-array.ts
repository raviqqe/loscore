export const toArray = async <T>(iterable: AsyncIterable<T>): Promise<T[]> => {
  const values: T[] = [];

  for await (const x of iterable) {
    values.push(x);
  }

  return values;
};
