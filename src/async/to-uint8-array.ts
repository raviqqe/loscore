import { sum } from "../sum.js";
import { map } from "../map.js";
import { toIterable } from "./to-iterable.js";

export const toUint8Array = async (
  stream: ReadableStream<Uint8Array>,
): Promise<Uint8Array> => {
  const chunks = [];

  for await (const chunk of toIterable(stream)) {
    chunks.push(chunk);
  }

  const length = sum(map(chunks, (chunk) => chunk.length));
  const array = new Uint8Array(length);
  let offset = 0;

  for (const chunk of chunks) {
    array.set(chunk, offset);
    offset += chunk.length;
  }

  return array;
};
