import {Match} from './_Internal'
import {Extends} from './Extends'
import {Equals} from './Equals'
import {Or} from '../Boolean/Or'
import {Replace} from '../Union/Replace'

/** Check whether `A` is similar to `A1` or not
 * @param A to be compared
 * @param A1 to compare to
 * @param match to change precision (?=`'default'`)
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * type test0 = Is<'x', 'x' | 0>            // true
 * type test1 = Is<'x', 'x' | 0, 'extends'> // true
 * type test2 = Is<'x', 'x' | 0, 'equals'>  // false
 * type test3 = Is<'x', 'x' | 0, 'loose'>   // true

 * type test4 = Is<'x' | 0, 'x'>            // boolean
 * type test5 = Is<'x' | 0, 'x', 'extends'> // boolean
 * type test6 = Is<'x' | 0, 'x', 'equals'>  // false
 * type test7 = Is<'x' | 0, 'x', 'loose'>   // true
 * ```
 */
export type Is<A extends any, A1 extends any, match extends Match = 'default'> = {
    'extends': Extends<A, A1>,                      // Is part of M
    'equals' : Equals<A, A1>,                       // Is equal to M
    'loose'  : Or<Extends<A, A1>, Extends<A1, A>>,  // Within each other
}[Replace<match, 'default', 'extends'>]
