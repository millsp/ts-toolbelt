import {Length} from './Length'
import {List} from './List'

/**
Get the first entry of **`L`**
@param L to extract from
@returns **`any`**
@example
```ts
```
*/
export type Head<L extends List> =
    Length<L> extends 0
    ? never
    : L[0]
