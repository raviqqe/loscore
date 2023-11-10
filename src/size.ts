export const size = (x: {}): number => {
  let size = 0;

  for (const _ of Object.keys(x)) {
    size++;
  }

  return size;
};
