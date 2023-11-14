import { mapStream } from "./map-stream.js";

export const toByteStream = (
  stream: ReadableStream<string>,
): ReadableStream<Uint8Array> => {
  const encoder = new TextEncoder();

  return mapStream(stream, (text) => encoder.encode(text));
};
