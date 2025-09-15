import { map } from "./map.js";
import { toStream } from "./to-stream.js";

export const mapStream = <T, S>(
  stream: ReadableStream<T>,
  callback: (value: T) => S,
): ReadableStream<S> => toStream(map(stream, callback));
