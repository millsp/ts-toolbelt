import {Number} from '../Number/Number'
import {_Drop} from './Drop'
import {_Take} from './Take'
import {Cast} from '../Any/Cast'
import {Prepend} from './Prepend'
import {_Reverse} from './Reverse'
import {List} from './List'
import {Extends} from '../Any/_api'

/**
@hidden
*/
type __Group<L extends List, N extends Number, LN extends List = []> = {
    0: __Group<_Drop<L, N>, N, Prepend<LN, _Take<L, N>>>
    1: _Reverse<LN>
}[Extends<L, List<never>>]

/**
@hidden
*/
export type _Group<L extends List, N extends Number> =
    __Group<L, N> extends infer X
    ? Cast<X, List>
    : never

/**
Split **`L`** into sub-[[List]]s every **`N`**
@param L to group
@param N to split at
@returns [[List]]
@example
```ts
```
*/
export type Group<L extends List, N extends Number> =
    L extends unknown
    ? N extends unknown
      ? _Group<L, N>
      : never
    : never
