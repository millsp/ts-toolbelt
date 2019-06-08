/** Explain to TS which function parameter has priority for generic inference
 * @param A to de-prioritize
 * @returns **`A`**
 * @example
 */
export declare type NoInfer<A extends any> = A & {
    [K in keyof A]: A[K];
};
