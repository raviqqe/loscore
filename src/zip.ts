export const zip = <T, S>(xs: T[], ys: S[]): [T, S][] =>
  xs.slice(0, ys.length).map((x, index) => [x, ys[index]!]);
