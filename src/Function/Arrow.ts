
/** Alias to create a **`Function`**
 * @param P parameters
 * @param R return type
 * @returns **`Function`**
 * @example
 */
export type Arrow<P extends any[] = any, R extends any = any> =
    (...args: P) => R
