import {Map} from '../Misc/Iteration/Map'
import {Iteration} from './Iteration'
import {NumberMap} from '../Misc/Iteration/Number'

/**
Move **`I`**'s position forward
@param I to move
@param IMap to operate with another set of numbers
@returns [[Iteration]]
@example
```ts
import {I} from 'ts-toolbelt'

type i = I.IterationOf<'20'>

type test0 = I.Pos<i>         // 20
type test1 = I.Pos<I.Next<i>> // 21
```
*/
export type Next<I extends Iteration, IMap extends Map = NumberMap> =
    IMap[I[1]] // continues iterating
