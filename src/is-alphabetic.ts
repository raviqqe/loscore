export const isAlphabetic = (text: string): boolean =>
  [...text].every(
    (character) => character.toLowerCase() !== character.toUpperCase(),
  );
