import {Keys} from './Keys'
import {At} from './At'

/**
Transform an [[Object]] into an [[Union]]
@param O to transform
@returns **`any`**
@example
```ts
```
*/
export type UnionOf<O extends object> =
    At<O, Keys<O>>
