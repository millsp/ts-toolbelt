import {Equals} from './Equals'

/** Check whether **`A1`** is part of **`A2`** or not
 * (diff. w/ `extends`: forces a **`boolean`** return)
 * @param A1
 * @param A2
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * import {A} from 'ts-toolbelt'
 *
 * type test0 = A.Extends<42, number>   // true
 * type test1 = A.Extends<42, string>   // false
 * type test2 = A.Extends<never, never> // false
 * /// Nothing cannot extend nothing, use `Equals`
 * ```
 */
export type Extends<A1 extends any, A2 extends any> =
    Equals<A1, never> extends true
    ? false // anything never is false
    : (A1 extends A2 ? true : false)

// Comes from the fact that `never` is a fall-through type that we want to
// narrow down to `false`. So it means that `Extends<never, any>` is false
