import { toIterable } from "./to-iterable.js";

export const toStream = async (
  stream: ReadableStream<Uint8Array>,
): Promise<Uint8Array> => {
  const array = [];

  for await (const chunk of toIterable(stream)) {
    array.push(chunk);
  }

  return array;
};
