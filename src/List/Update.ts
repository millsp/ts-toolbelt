import {Key as IKey} from '../Iteration/Key'
import {IterationOf} from '../Iteration/IterationOf'
import {Key} from '../Any/Key'
import {List} from './List'
import {Replace} from '../Union/Replace'
import {x} from '../Any/x'
import {GreaterEq} from '../Number/GreaterEq'
import {Length} from './Length'
import {Overwrite} from './Overwrite'
import {_Repeat} from './Repeat'
import {Next} from '../Iteration/Next'
import {Naked} from './_Internal'
import {NumberOf} from '../Any/_Internal'
import {Extends} from '../Any/Extends'
import {Or} from '../Boolean/Or'

/**
@hidden
*/
export type UpdateField<L extends List, K extends string, A extends any> = {
    [P in keyof L]: P extends K
                    ? Replace<A, x, L[P]>
                    : L[P]
} & {}

/**
@hidden
*/
type UpdateTuple<L extends List, K extends string, A extends any> =
    GreaterEq<K, Length<L, 's'>> extends 1
    ? UpdateField<Overwrite<_Repeat<undefined, IKey<Next<IterationOf<K>>>>, L>, K, A>
    : UpdateField<L, K, A>

/**
@hidden
*/
type UpdateList<L extends List, A extends any> =
    (L[number] | A)[]

/**
@hidden
*/
export type _Update<L extends List, K extends Key, A extends any> =
    Or<Extends<number, Length<L>>, Extends<number, K>> extends 1
    ? UpdateList<L, A>
    : UpdateTuple<Naked<L>, NumberOf<K> & string, A>

/**
Update in **`L`** the entries of key **`K`** with **`A`**.
Use the [[x]] placeholder to get the current field type.
@param L to update
@param K to chose fields
@param A to update with
@returns [[List]]
@example
```ts
```
*/
export type Update<L extends List, K extends Key, A extends any> =
    L extends unknown
    ? K extends unknown
      ? _Update<L, K, A>
      : never
    : never
