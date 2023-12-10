import { sum } from "../sum.js";
import { map } from "../map.js";
import { toIterable } from "./to-iterable.js";

export const toStream = async (
  stream: ReadableStream<Uint8Array>,
): Promise<Uint8Array> => {
  const chunks = [];

  for await (const chunk of toIterable(stream)) {
    chunks.push(chunk);
  }

  const length = sum(map(chunks, (chunk) => chunk.length));
  const array = new Uint8Array(length);

  for (const chunk of chunks) {
    array.set(chunk);
  }

  return array;
};
