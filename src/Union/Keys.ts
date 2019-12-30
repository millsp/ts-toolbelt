import {Union} from './Union'
import {Key} from '../Any/Key'

/**
Get the keys of a [[Union]]
@param U
@returns [[Key]]
@example
```ts
```
*/
export type Keys<U extends Union> =
    (
        U extends unknown
        ? keyof U
        : never
    ) & Key
