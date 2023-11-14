import { mapStream } from "./map-stream.js";

export const toStringStream = (
  stream: ReadableStream<Uint8Array>,
): ReadableStream<string> => {
  const decoder = new TextDecoder();

  return mapStream(stream, (text) => decoder.decode(text));
};
