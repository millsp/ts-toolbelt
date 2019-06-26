/** Explain to TS which function parameter has priority for generic inference
 * @param A to de-prioritize
 * @returns **`A`**
 * @example
 * ```ts
 * ```
 */
export type NoInfer<A extends any> =
    A & {[K in keyof A]: A[K]}

// https://github.com/microsoft/TypeScript/issues/14829#issuecomment-322267089
// Better than `A & {}` that does not work very well with any kind of type

