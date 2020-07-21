import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Cast} from '../Any/Cast'
import {Key} from '../Iteration/Key'
import {Next} from '../Iteration/Next'
import {_Append} from '../List/Append'
import {Exclude} from '../Union/Exclude'
import {List} from '../List/List'
import {Extends} from '../Any/_api'

/**
@hidden
*/
type PickIfEntry<O extends object, LN extends List, I extends Iteration> =
    Key<I> extends keyof O
    ? _Append<LN, O[Cast<Key<I>, keyof O>]>
    : LN

/**
@hidden
*/
type ___ListOf<O extends object, K, LN extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: ___ListOf<O, Exclude<K, Key<I>>, PickIfEntry<O, LN, I>, Next<I>>
    1: LN
}[Extends<[K], [never]>]

/**
@hidden
*/
export type __ListOf<O extends object> =
    number extends keyof O
    ? O[never][]
    : ___ListOf<O, keyof O>

/**
@hidden
*/
export type _ListOf<O extends object> =
    __ListOf<O> extends infer X
    ? Cast<X, List>
    : never

/**
Transform an [[Object]] into a [[List]]
(It will only pick numeric literal indexes)
@param O to transform
@returns [[List]]
@example
```ts
```
*/
export type ListOf<O extends object> =
    O extends unknown
    ? _ListOf<O>
    : never
