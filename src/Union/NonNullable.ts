import {Exclude} from './Exclude'
import {Union} from './Union'

/**
Remove **`undefined`** & **`null`** out of **`U`**
@param U to make non-nullable
@returns [[Union]]
@example
```ts
```
*/
export type NonNullable<U extends Union> =
    Exclude<U, undefined | null>
