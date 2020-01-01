import {Exclude} from './Exclude'
import {Union} from './Union'

/**
Remove **`M`** out of **`U`**
@param U to remove from
@param M to remove out
@returns [[Union]]
@example
```ts
```
*/
export type Filter<U extends Union, M extends Union> =
    Exclude<U, M>
