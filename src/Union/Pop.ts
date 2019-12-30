import {Exclude} from './Exclude'
import {Last} from './Last'
import {Union} from './Union'

/**
Remove an item out of **`U`**
(⚠️ it might not preserve order)
@param U to remove from
@returns [[Union]]
@example
```ts
```
*/
export type Pop<U extends Union> =
    Exclude<U, Last<U>>
