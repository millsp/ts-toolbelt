import {Map} from '../Misc/Iteration/Map'
import {Iteration} from './Iteration'
import {NumberMap} from '../Misc/Iteration/Number'
import {Format} from './Format'

/**
Get the position of **`I`** (**string**)
@param I to query
@param IMap to operate with another set of numbers
@returns [[String]]
@example
```ts
import {I} from 'ts-toolbelt'

type i = I.IterationOf<'20'>

type test0 = I.Key<i>         // '20'
type test1 = I.Key<I.Next<i>> // '21'
```
*/
export type Key<I extends Iteration, IMap extends Map = NumberMap> =
    Format<I, 's', IMap>
