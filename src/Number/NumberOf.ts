/**
Transform a `number` into a [[Number]]
@param N to stringify
@param IMap to operate with another set of numbers
@returns [[String]]
@example
```ts
import {N} from 'ts-toolbelt'

type test0 = N.StringOf<5>  //  '5'
type test1 = N.StringOf<-5> // '-5'
```
*/
export type NumberOf<N extends number> =
    `${N}`
