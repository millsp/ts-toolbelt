import {Number} from '../Number/Number'
import {NumberMap} from '../Misc/Iteration/Number'
import {Map} from '../Misc/Iteration/Map'
import {Cast} from '../Any/Cast'
import {Iteration} from './Iteration'

/**
Describes a map of number relationships
@hidden
*/
export type IterationMaps = Map

/**
Describes a map for iterating with numbers
(Generated with "./_Internal/IterationOfGenerator")
@hidden
*/
export type IterationMap = NumberMap

/**
Transform a number into an [[Iteration]]
(to use [[Prev]], [[Next]], & [[Pos]])
@param N to transform
@returns [[Iteration]]
@example
```ts
import {I} from 'ts-toolbelt'

type i = I.IterationOf<'0'> // ["-1", "1", "0", 0, "0"]

type next = I.Next<i>       // ["0", "2", "1", 1, "+"]
type prev = I.Prev<i>       // ["-2", "0", "-1", -1, "-"]

type nnext = I.Pos<next>    // +1
type nprev = I.Pos<prev>    // -1
```
*/
export type IterationOf<N extends Number, IMap extends Map = NumberMap> =
    N extends keyof IMap
    ? IMap[N]
    : IMap['__']
