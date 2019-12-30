import {Function} from './Function'

/**
Extract the return type of a [[Function]]
@param F to extract from
@returns **`any`**
@example
```ts
import {F} from 'ts-toolbelt'

const fn = () => true

type test0 = F.ReturnOf<typeof fn>  // boolean

type test1 = F.ReturnOf<() => true> // true
```
*/
export type Return<F extends Function> =
    F extends ((...args: any[]) => infer R)
    ? R
    : never
