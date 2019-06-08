/** Describes a **tuple** or an **`Array`**
 */
export type List<A = any> = A[] // remove readonly to generate docs

/** Describes how to perform iterations
 */
export type Way = '->' | '<-'
