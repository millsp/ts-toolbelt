import {IterationMaps} from './IterationOf'
import {Iteration} from './Iteration'
import {Number as NumberMap} from '../Misc/Iteration/Number'
import {Format} from './Format'

/**
Move **`I`**'s position backwards
@param I to move
@returns [[Iteration]]
@example
```ts
import {I} from 'ts-toolbelt'

type i = I.IterationOf<'20'>

type test0 = I.Pos<i>         // 20
type test1 = I.Pos<I.Prev<i>> // 19
```
*/
export type Prev<I extends Iteration<IMap>, IMap extends IterationMaps = NumberMap> =
    IMap[I[0]] // continues iterating
