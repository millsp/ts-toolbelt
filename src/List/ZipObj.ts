import {Length} from './Length'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Cast} from '../Any/Cast'
import {Merge} from '../Object/Merge'
import {Record} from '../Object/Record'
import {Key} from '../Any/Key'
import {List} from './List'

/**
 * @hidden
 */
type _ZipObj<LKeys extends List<Key>, LFields extends List, O extends object = {}, I extends Iteration = IterationOf<'0'>> = {
    0: _ZipObj<LKeys, LFields, Merge<O, Record<LKeys[Pos<I>], LFields[Pos<I>]>>, Next<I>>
    1: O
}[
    Pos<I> extends Length<LKeys>
    ? 1
    : 0
]

/** Create an **`object`** from [[List]]s of keys & fields
 * @param LKeys its keys
 * @param LFields its fields
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type ZipObj<LKeys extends List<Key>, LFields extends List> =
    _ZipObj<LKeys, LFields> extends infer X
    ? Cast<X, object>
    : never
