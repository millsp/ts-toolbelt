import {Iteration} from './Iteration'
import {Formats} from './_Internal'

/**
Is [[Key]] and [[Pos]] in a single type
@param I to query
@param fmt output format
@returns `string | number`
@example
```ts
import {I} from 'ts-toolbelt'

/// Let's make '20' an iteration
type i = I.IterationOf<'20'> // [...]

type fmtS = I.Fmt<i, 's'> // '20'
type fmtN = I.Fmt<i, 'n'> //  20
```
*/
export type Format<I extends Iteration, fmt extends Formats> = {
    's': I[2]
    'n': I[3]
}[fmt]
