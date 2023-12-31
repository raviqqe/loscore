import { map } from "../map.js";
import { sum } from "../sum.js";
import { toArray } from "./to-array.js";

export const collectUint8Array = async (
  iterable: AsyncIterable<Uint8Array>,
): Promise<Uint8Array> => {
  const chunks = await toArray(iterable);

  const length = sum(map(chunks, (chunk) => chunk.length));
  const array = new Uint8Array(length);
  let offset = 0;

  for (const chunk of chunks) {
    array.set(chunk, offset);
    offset += chunk.length;
  }

  return array;
};
