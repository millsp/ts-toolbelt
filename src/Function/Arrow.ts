
/** Alias to create a **`Function`**
 * @param P parameters
 * @param R return type
 * @returns **`Function`**
 * @example
 * ```ts
 * type test0 = Arrow<[string, number], boolean>
 * /// (args_0: string, args_1: number) => boolean
 * ```
 */
export type Arrow<P extends any[] = any, R extends any = any> =
    (...args: P) => R
