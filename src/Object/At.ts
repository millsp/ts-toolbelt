/** Get in **`O`** the type of a field of key **`K`**
 * @param O to extract from
 * @param K **`keyof`** to extract at
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type At<O extends object, K extends string> =
    K extends keyof O
    ? O[K]
    : never
