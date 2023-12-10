import { toIterable } from "./to-iterable.js";

export const toString = async (
  stream: ReadableStream<string>,
): Promise<string> => {
  const chunks = [];

  for await (const chunk of toIterable(stream)) {
    chunks.push(chunk);
  }

  return chunks.join("");
};
