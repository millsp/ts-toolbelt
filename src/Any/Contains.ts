import {Extends} from './Extends'
import {Implements} from './Implements'
import {And} from '../Boolean/And'

/**
 * Check whether **`A1`** contains **`A2`** or not. This works for [[Union]]s as
 * well as [[Object]]s.
 * @param A1
 * @param A2
 * @returns [[Boolean]]
 * @example
 * ```ts
 * type test0 = A.Contains<'a' | 'b', 'b'> // True
 * type test1 = A.Contains<'a', 'a' | 'b'> // False
 *
 * type test2 = A.Contains<{a: string}, {a: string, b: number}> // False
 * type test3 = A.Contains<{a: string, b: number}, {a: string}> // True
 *
 * type test4 = A.Contains<never, never> // False
 * /// Nothing cannot contain nothing, use `A.Equals`
 * ```
 */
export type Contains<A1 extends any, A2 extends any> =
    And<Extends<A1, object>, Extends<A2, object>> extends 1
    ? Implements<A1, A2>
    : Implements<A2, A1>
