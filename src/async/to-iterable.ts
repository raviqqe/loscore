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
