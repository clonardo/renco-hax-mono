export {};

declare global {
  /**
   * Common async utility types
   */
  namespace AsyncUtils {
    /**
     * Async function type, inferring output
     */
    type Async<T> = T extends (...args: infer P) => infer R
      ? (...args: P) => Promise<R>
      : Promise<T>;

    /**
     * Extract a type argument from a promise or a function that returns a promise.
     */
    type Promised<T> = T extends Promise<infer P> ? P : (
      T extends (...args: unknown[]) => Promise<infer R> ? R : never
    );
  }
}
