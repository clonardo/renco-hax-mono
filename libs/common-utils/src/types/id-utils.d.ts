export {};

declare global {
  /**
   * Common ID/key utility types
   */
  namespace IdUtils {
    /**
     * Resource with string-keyed ID
     */
    type IdWrapper<T> = {
      [P in keyof T]: T[P] extends (...args: infer P) => infer R
        ? (id: string, ...args: P) => R
        : T[P];
    };

    type Rename<T, O extends keyof T, N extends keyof T> = Omit<T, O> &
      Record<N, T[O]>;
  }
}
