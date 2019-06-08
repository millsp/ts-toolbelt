/** Check whether **`A1`** is part of **`A2`** or not
 * (diff. w/ `extends`: forces a **`boolean`** return)
 * @param A1
 * @param A2
 * @returns **`true`** or **`false`**
 * @example
 */
export type Extends<A1 extends any, A2 extends any> =
    (A1 extends infer A ? A : never) extends never
    ? false // handle never, anything never is false
    : (A1 extends A2 ? true : false)

// Comes from the fact that `never` is a fall-through type that we want to
// narrow down to `false`. So it means that `Extends<never, never>` is false
