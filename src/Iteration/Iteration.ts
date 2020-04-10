import {Map} from '../Misc/Iteration/Map'
import {NumberMap} from '../Misc/Iteration/Number'

/**
An entry of **`IterationMap`**
* `[0]`: Prev (<-)
* `[1]`: Next (->)
* `[2]`: Current **`string`**
* `[3]`: Current **`number`**
* `[4]`: Sign (- / 0 / +)
*/
export type Iteration<IMap extends Map = NumberMap> = [ // todo: not used
    string,
    string,
    string,
    number,
    '-' | '0' | '+'
]
