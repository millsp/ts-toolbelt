import {Union} from './Union'

/**
Check whether **`U`** contains the whole union **`U1`**
@param U to be inspected
@param U1 to check within
@returns [[Boolean]]
@example
```ts
```
*/
export type HasAll<U extends Union, U1 extends Union> =
    [Exclude<U1, U & U1>] extends [never]
    ? 1
    : 0
