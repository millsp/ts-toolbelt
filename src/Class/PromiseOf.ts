/**
Get the instance type wrapped within a **`Promise`**
@param P **`Promise`**
@returns **`any`**
@example
```ts
import {C} from 'ts-toolbelt'

const promise = new Promise<string>((res, rej) => res('x'))

type test0 = C.PromiseOf<typeof promise>  // string
type test1 = C.PromiseOf<Promise<number>> // number
```
*/
export type PromiseOf<P extends any> =
    P extends Promise<infer A>
    ? A
    : P
