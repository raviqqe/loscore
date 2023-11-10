export const flow =
  <T>(fs: ((x: T) => T)[]): ((x: T) => T) =>
  (x: T): T => {
    for (const f of fs) {
      x = f(x);
    }

    return x;
  };
