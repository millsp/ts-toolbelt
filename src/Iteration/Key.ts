import {IterationMaps} from './IterationOf'
import {Iteration} from './Iteration'
import {Number as NumberMap} from '../Misc/Iteration/Number'
import {Format} from './Format'

/**
Get the position of **`I`** (**string**)
@param I to query
@returns [[String]]
@example
```ts
import {I} from 'ts-toolbelt'

type i = I.IterationOf<'20'>

type test0 = I.Key<i>         // '20'
type test1 = I.Key<I.Next<i>> // '21'
```
*/
export type Key<I extends Iteration<IMap>, IMap extends IterationMaps = NumberMap> =
    Format<I, 's', IMap>
