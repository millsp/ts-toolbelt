import {IterationMaps} from './IterationOf'
import {Iteration} from './Iteration'
import {Number as NumberMap} from '../Misc/Iteration/Number'
import {Format} from './Format'

/**
Get the position of **`I`** (**number**)
@param I to query
@returns **`number`**
@example
```ts
import {I} from 'ts-toolbelt'

type i = I.IterationOf<'20'>

type test0 = I.Pos<i>         // 20
type test1 = I.Pos<I.Next<i>> // 21
```
*/
export type Pos<I extends Iteration<IMap>, IMap extends IterationMaps = NumberMap> =
    Format<I, 'n', IMap>
