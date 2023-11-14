export const isAsyncIterable = (
  data: unknown,
): data is AsyncIterable<unknown> =>
  Boolean(data) &&
  typeof data === "object" &&
  typeof (data as AsyncIterable<unknown>)[Symbol.asyncIterator] === "function";
