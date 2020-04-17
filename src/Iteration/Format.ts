import {Iteration} from './Iteration'
import {NumberMap} from '../Misc/Iteration/Number'
import {Formats} from './_Internal'
import {Map} from '../Misc/Iteration/Map'

/**
Is [[Key]] and [[Pos]] in a single type
@param I to query
@param fmt output format
@param IMap to operate with another set of numbers
@returns **`string | number`**
@example
```ts
import {I} from 'ts-toolbelt'

/// Let's make '20' an iteration
type i = I.IterationOf<'20'> // [...]

type fmtS = I.Fmt<i, 's'> // '20'
type fmtN = I.Fmt<i, 'n'> //  20
```
*/
export type Format<I extends Iteration, fmt extends Formats, IMap extends Map = NumberMap> = {
    's': I[2]
    'n': I[3]
}[fmt]
