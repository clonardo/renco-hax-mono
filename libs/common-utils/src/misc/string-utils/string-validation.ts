/**
 * Check that a string is valid + populated with a non-empty string
 *
 * @param str maybe a string
 * @returns true if valid + not empty
 */
export const stringIsNotEmpty = (str?: string): boolean => {
  return str && str.length && str != '';
};
