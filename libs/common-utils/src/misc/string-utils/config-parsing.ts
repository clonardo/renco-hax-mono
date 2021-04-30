/**
 * Strings (all lowercase) that should resolve to 'true'.
 * Includes: true, yes, ok, on, + 1
 */
export const AffirmativeTargetStrings: Set<string> = new Set<string>([
  'true',
  'yes',
  'ok',
  'on',
  '1'
]);

/**
 * Check whether a string-like value (e.g., as expanded from .env) should be treated as true or false.
 * Performs a trimmed, case-insensitive check for the following strings: [true, yes, ok, on, 1].
 * Return true if matching
 *
 * @param rawInput Some string-like value to check
 */
export const ResolveBooleanFromString = (rawInput?: string): boolean => {
  const sanitizedInput =
    rawInput && typeof rawInput == 'string' && rawInput.length
      ? rawInput.trim().toLowerCase()
      : null;

  if (sanitizedInput) {
    return AffirmativeTargetStrings.has(sanitizedInput);
  } else {
    return false;
  }
};

/**
 * Coerce an object with string-like values (e.g., a config from dotenv) to an object with boolean values
 *
 * @param objectIn Object from which to parse booleans
 * @returns An object with the same keys as the input object, but boolean values
 */
export function ResolveRuntimeBooleanConfig<T extends object>(
  objectIn: T
): NodeJS.FlaggableKeys<T> {
  if (objectIn && Object.keys(objectIn) && Object.keys(objectIn).length) {
    return Object.keys(objectIn).reduce((acc, iter) => {
      return {
        ...acc,
        ...{ [iter]: ResolveBooleanFromString(objectIn[iter]) }
      };
    }, {}) as any;
  } else {
    throw new Error(
      `Error in ResolveRuntimeConfig: objectIn not defined/not valid`
    );
  }
}
