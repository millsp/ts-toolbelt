import {Number} from '../Number/Number'
import {NumberMap} from '../Iteration/Maps/Number'
import {Map} from '../Iteration/Map'

/**
Transform a number into an [[Iteration]]
(to use [[Prev]], [[Next]], & [[Pos]])
@param N to transform
@param IMap to operate with another set of numbers
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
    N extends keyof IMap[1]
    ? IMap[1][N]
    : IMap[1]['__']
