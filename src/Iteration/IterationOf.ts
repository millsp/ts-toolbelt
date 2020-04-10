import {Number} from '../Number/Number'
import {Number as NumberMap} from '../Misc/Iteration/Number'
import {Pixel as PixelMap} from '../Misc/Iteration/Pixel'

export type IterationMaps = NumberMap | PixelMap

/**
Describes a map of number relationships
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
export type IterationOf<N extends Number> =
    N extends keyof IterationMap
    ? IterationMap[N]
    : IterationMap['__']
