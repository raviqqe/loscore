export const defer = <T, F extends (...args: never[]) => Promise<T>>(
  callback: F,
): ((...args: Parameters<F>) => Promise<T>) => {
  const cache: Record<string, Promise<T>> = {};

  return async (...args: Parameters<F>): Promise<T> => {
    const key = JSON.stringify(args);
    const lastPromise = cache[key];
    const promise = callback(...args);
    cache[key] = promise;

    return lastPromise ?? promise;
  };
};
