import {Formats} from './_Internal'
import {Pos} from '../Iteration/Pos'
import {IterationOf} from '../Iteration/IterationOf'
import {Extends} from '../Any/Extends'

/**
Change the format of a `string`
@param S to transform
@returns `string | number | boolean`
@example
```ts
import {S} from 'ts-toolbelt'

type test0 = S.Format<'30', 'b'> // True
type test1 = S.Format<'30', 'n'> // 30
```
*/
export type Format<S extends string, fmt extends Formats> = {
    'b': {
        1: Boolean
        0: S extends 'false'
           ? 0
           : 1
    }[Extends<string, S>]
    'n': Pos<IterationOf<S>>
    's': S
}[fmt]
