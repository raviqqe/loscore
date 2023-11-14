export const toStream = <T>(iterable: AsyncIterable<T>): ReadableStream<T> =>
  new ReadableStream({
    start: async (controller) => {
      for await (const value of iterable) {
        controller.enqueue(value);
      }

      controller.close();
    },
  });
