import {Replace} from '../Union/Replace'
import {Match} from './_Internal'

type EqualsDefault<A1 extends any, A2 extends any> =
    (A1 | A2) extends A1   // If both of them are A1
    ? (A1 | A2) extends A2 // If both of them are A2
      ? true
      : false
    : false

// Credit https://stackoverflow.com/a/52473108/3570903
type EqualsStrict<A1 extends any, A2 extends any> =
    (<A>() => A extends A1 ? 1 : 2) extends (<A>() => A extends A2 ? 1 : 2)
    ? true
    : false

/** Check whether **`A1`** is equal to **`A2`** or not
 * @param A1
 * @param A2
 * @param match to change precision
 * @returns **`true`** or **`false`**
 * @example
 */
export type Equals<A1 extends any, A2 extends any, match extends Match = 'default'> = {
    'default': EqualsDefault<A1, A2>
    'equals' : EqualsStrict<A1,  A2>
}[Replace<match, 'extends' | 'loose', 'default'>]
