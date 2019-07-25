import {False, True} from '../Boolean/Boolean'
import {Extends} from './Extends'

/** Check whether **`A1`** is part of **`A2`** or not. It works like
 * **`Extends`** but **`Boolean`** results are narrowed to **`False`**.
 * @param A1
 * @param A2
 * @returns **`Boolean`**
 * @example
 * ```ts
 * type test0 = A.Implements<'a' | 'b', 'b'> // False
 * type test1 = A.Implements<'a', 'a' | 'b'> // True
 *
 * type test2 = A.Implements<{a: string}, {a: any}>      // True
 * type test3 = A.Implements<{a: any}, {a: any, b: any}> // False
 *
 * type test4 = A.Implements<never, never> // False
 * /// Nothing cannot implement nothing, use `A.Equals`
 * ```
 */
export type Implements<A1 extends any, A2 extends any> =
    Extends<A1, A2> extends True
    ? True
    : False
