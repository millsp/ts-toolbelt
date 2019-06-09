import {Replace as OReplace} from '../Object/Replace'
import {Modx} from '../Object/_Internal'
import {TupleOf} from '../Object/TupleOf'
import {Length} from './Length'
import {Cast} from '../Any/Cast'
import {List} from '../_Internal'

/** Update with **`A`** the entries of **`T`** that match **`M`**
 * @param T to update
 * @param M to select entries
 * @param A to update with
 * @param modx to set modifiers (?=`['!', 'W']`)
 * @returns **`List`**
 * @example
 */
export type Replace<T extends List, M extends any, A extends any, modx extends Modx = ['!', 'W']> =
    TupleOf<OReplace<T, M, A, modx>, Length<T, 's', 'max'>> extends infer X
    ? Cast<X, List>
    : never
