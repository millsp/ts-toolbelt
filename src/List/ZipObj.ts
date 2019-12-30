import {Length} from './Length'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Cast} from '../Any/Cast'
import {MergeFlat} from '../Object/Merge'
import {Record} from '../Object/Record'
import {Key} from '../Any/Key'
import {List} from './List'
import {Naked} from './_Internal'
import {Extends} from '../Any/Extends'

/**
@hidden
*/
type __ZipObj<LKeys extends List<Key>, LFields extends List, O extends object = {}, I extends Iteration = IterationOf<'0'>> = {
    0: __ZipObj<LKeys, LFields, MergeFlat<O, Record<LKeys[Pos<I>], LFields[Pos<I>]>>, Next<I>>
    1: O
}[Extends<Pos<I>, Length<LKeys>>]

/**
@hidden
*/
export type _ZipObj<LKeys extends List<Key>, LFields extends List> =
    __ZipObj<Naked<LKeys>, Naked<LFields>> extends infer X
    ? Cast<X, object>
    : never

/**
Create an [[Object]] from [[List]]s of keys & fields
@param LKeys its keys
@param LFields its fields
@returns [[Object]]
@example
```ts
```
*/
export type ZipObj<LKeys extends List<Key>, LFields extends List> =
    LKeys extends unknown
    ? LFields extends unknown
      ? _ZipObj<LKeys, LFields>
      : never
    : never
