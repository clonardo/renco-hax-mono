export {};

declare global {
  /**
   * Common object utility types
   */
  namespace ObjectUtils {
    /**
     * a recursive alternative to `Partial<T>`
     */
    type DeepPartial<T> = {
      [P in keyof T]?: T[P] extends Record<any, any> ? DeepPartial<T[P]> : T[P]
    };
  }
}