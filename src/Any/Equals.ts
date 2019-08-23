import {True, False} from '../Boolean/Boolean'

/** Check whether **`A1`** is equal to **`A2`** or not.
 * @param A1
 * @param A2
 * @returns **`Boolean`**
 * @example
 * ```ts
 * import {A} from 'ts-toolbelt'
 *
 * type test0 = A.Equals<42 | 0, 42 | 0>                    // true
 * type test1 = A.Equals<{a: string}, {b: string}>          // false
 * type test3 = A.Equals<{a: string}, {readonly a: string}> // false
 * ```
 */
export type Equals<A1 extends any, A2 extends any> =
    (<A>() => A extends A1 ? True : False) extends (<A>() => A extends A2 ? True : False)
    ? True
    : False

// Credit https://stackoverflow.com/a/52473108/3570903
