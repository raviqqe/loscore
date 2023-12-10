export const capitalize = (string: string): string =>
  (string[0] ?? "").toLocaleUpperCase() + string.slice(1);
