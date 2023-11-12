import { map } from "./map.js";

export const toStream = <T>(iterable: AsyncIterable<T>): ReadableStream<T> =>
  new ReadableStream({
    start: async (controller) => {
      for await (const value of iterable) {
        controller.enqueue(value);
      }

      controller.close();
    },
  });

export const toIterable = async function* <T>(
  stream: ReadableStream<T>,
): AsyncIterable<T> {
  const reader = stream.getReader();

  for (;;) {
    const result = await reader.read();

    if (result.done) {
      break;
    }

    yield result.value;
  }
};

export const toStringStream = (
  stream: ReadableStream<Uint8Array>,
): ReadableStream<string> => {
  const decoder = new TextDecoder();

  return mapStream(stream, (text) => decoder.decode(text));
};

export const toByteStream = (
  stream: ReadableStream<string>,
): ReadableStream<Uint8Array> => {
  const encoder = new TextEncoder();

  return mapStream(stream, (text) => encoder.encode(text));
};

export const mapStream = <T, S>(
  stream: ReadableStream<T>,
  callback: (value: T) => S,
): ReadableStream<S> => toStream(map(toIterable(stream), callback));
