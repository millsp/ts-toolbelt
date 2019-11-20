/** A [[Tuple]] is a list where a fixed number of elements is known
 * @param A its type
 * @returns **`any[]`**
 * @example
 * ```ts
 * type tuple0 = [1, 2, 3]
 * type tuple1 = ['a', 42]
 * ```
 */
export type Tuple<A = any> = ReadonlyArray<A>
