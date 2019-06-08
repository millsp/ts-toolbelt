/** Force TS to load a type that has not been computed
 * (To resolve composed types that TS hasn't resolved)
 * @param A
 * @returns **`A`**
 */
export type Compute<A extends any> =
    A extends infer X
    ? {[K in keyof X]: X[K]}
    : never
