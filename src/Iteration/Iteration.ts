import {IterationMap} from './IterationOf'

/** Describes a valid entry of **`IterationMap`**
 * * `[0]`: Prev (<-)
 * * `[1]`: Next (->)
 * * `[2]`: Current **`string`**
 * * `[3]`: Current **`number`**
 * * `[4]`: Sign (- / 0 / +)
 */
export type Iteration =[
    keyof IterationMap,
    keyof IterationMap,
    string,
    number,
    '-' | '0' | '+'
]
