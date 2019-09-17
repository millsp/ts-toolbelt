/** Get the parameters of a class constructor
 * @param C **typeof** **`class`**
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Parameters<C extends new (...args: any[]) => any> =
    C extends new (...args: infer P) => any
    ? P
    : never
