export const capitalize = (x: string): string =>
  (x[0] ?? "").toLocaleUpperCase() + x.slice(1);
