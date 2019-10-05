import {Length} from './Length'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Cast} from '../Any/Cast'
import {Merge} from '../Object/Merge'
import {Record} from '../Object/Record'
import {Index} from '../Any/Index'
import {Tuple} from './Tuple'
import {Key} from '../Iteration/Key'

type _ZipObj<TProp extends Tuple<Index>, TField extends Tuple, O extends object = {}, I extends Iteration = IterationOf<'0'>> = {
    0: _ZipObj<TProp, TField, Merge<O, Record<TProp[Pos<I>], TField[Pos<I>]>>, Next<I>>
    1: O
}[
    Key<I> extends Length<TProp, 's'>
    ? 1
    : 0
]

/** Create an **`object`** from **tuple**s of keys & fields
 * @param TProps its keys
 * @param TFields its fields
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type ZipObj<TKeys extends Tuple<Index>, TFields extends Tuple> =
    _ZipObj<TKeys, TFields> extends infer X
    ? Cast<X, object>
    : never
