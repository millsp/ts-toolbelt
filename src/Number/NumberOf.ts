import {IterationMap} from '../Iteration/IterationOf'
import {Key} from '../Iteration/Key'
import {Pos} from '../Iteration/Pos'
import {Numbers} from './_Internal'

/**
@hidden
*/
export type _NumberOf<N extends number> = {
    [K in keyof IterationMap]: Pos<IterationMap[K]> extends N
                               ? Key<IterationMap[K]>
                               : never
}[keyof IterationMap] // union of matched numbers

/**
Transform a **`number`** into a [[Number]]
@param N to stringify
@returns [[String]]
@example
```ts
import {N} from 'ts-toolbelt'

type test0 = N.StringOf<5>  //  '5'
type test1 = N.StringOf<-5> // '-5'
```
*/
export type NumberOf<N extends number> =
    N extends Numbers['number']['all']
    ? _NumberOf<N>
    : string
