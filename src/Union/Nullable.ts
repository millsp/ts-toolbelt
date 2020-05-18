import {Union} from './Union'

/**
Add **`undefined | null`** to **`U`**
@param U to make nullable
@returns [[Union]]
@example
```ts
```
*/
export type Nullable<U extends Union> =
    U | undefined | null
