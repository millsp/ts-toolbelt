import {True, False} from '../Boolean/_Boolean'

type EqualsDefault<A1 extends any, A2 extends any> =
    (A1 | A2) extends A1   // If both of them are A1
    ? (A1 | A2) extends A2 // If both of them are A2
      ? True
      : False
    : False

// Credit https://stackoverflow.com/a/52473108/3570903
type EqualsStrict<A1 extends any, A2 extends any> =
    (<A>() => A extends A1 ? True : False) extends (<A>() => A extends A2 ? True : False)
    ? True
    : False

/** Check whether **`A1`** is equal to **`A2`** or not
 * @param A1
 * @param A2
 * @param match to change precision
 * @returns **`True`** or **`False`**
 * @example
 * ```ts
 * import {A} from 'ts-toolbelt'
 *
 * type test0 = A.Equals<42 | 0, 42 | 0>                              // true
 * type test1 = A.Equals<{a: string}, {b: string}>                    // false
 * type test2 = A.Equals<{a: string}, {readonly a: string}>           // true
 * type test3 = A.Equals<{a: string}, {readonly a: string}, 'strict'> // false
 * ```
 */
export type Equals<A1 extends any, A2 extends any, match extends 'default' | 'strict' = 'default'> = {
    'default': EqualsDefault<A1, A2>
    'strict' : EqualsStrict<A1,  A2>
}[match]
