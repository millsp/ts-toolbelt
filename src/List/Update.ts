import {Key as IKey} from '../Iteration/Key'
import {IterationOf} from '../Iteration/IterationOf'
import {Key} from '../Any/Key'
import {List} from './List'
import {Replace} from '../Union/Replace'
import {x} from '../Any/x'
import {GreaterEq} from '../Number/_api'
import {Length} from './Length'
import {Overwrite} from './Overwrite'
import {_Repeat} from './Repeat'
import {Next} from '../Iteration/Next'
import {Naked} from './_Internal'
import {NumberOf} from '../Any/_Internal'

/**
 * @hidden
 */
export type UpdateField<L extends List, K extends string, A extends any> = {
    [P in keyof L]: P extends K
                    ? Replace<A, x, L[P]>
                    : L[P]
} & {}

/**
 * @hidden
 */
type __Update<L extends List, K extends string, A extends any> =
    GreaterEq<K, Length<L, 's'>> extends 1
    ? UpdateField<Overwrite<_Repeat<undefined, IKey<Next<IterationOf<K>>>>, L>, K, A>
    : UpdateField<L, K, A>

/**
 * @hidden
 */
export type _Update<L extends List, K extends Key, A extends any> =
    number extends Length<L>
    ? (L[number] | A)[]
    : __Update<Naked<L>, NumberOf<K> & string, A>

/** Update in **`L`** the entries of key **`K`** with **`A`**.
 * Use the [[x]] placeholder to get the current field type.
 * @param L to update
 * @param K to chose fields
 * @param A to update with
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Update<L extends List, K extends Key, A extends any> =
    L extends unknown
    ? K extends unknown
      ? _Update<L, K, A>
      : never
    : never

type t = Update<number[], 5, '42'>
