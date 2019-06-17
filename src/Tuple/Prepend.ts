
/** Add an element **`A`** at the beginning of **`T`**
 * @param T to append to
 * @param A to be added to
 * @returns **`any[]`**
 * @example
 */
export type Prepend<T extends any[], A extends any> =
    ((head: A, ...args: T) => any) extends ((...args: infer U) => any)
    ? U
    : T
