import {IterationMaps} from './IterationOf'
import {Number as NumberMap} from '../Misc/Iteration/Number'

/**
An entry of **`IterationMap`**
* `[0]`: Prev (<-)
* `[1]`: Next (->)
* `[2]`: Current **`string`**
* `[3]`: Current **`number`**
* `[4]`: Sign (- / 0 / +)
*/
export type Iteration<IMap extends IterationMaps = NumberMap> = [
    keyof IMap,
    keyof IMap,
    string,
    number,
    '-' | '0' | '+'
]
