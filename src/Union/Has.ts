import {Union} from './Union'
import {Not} from '../Boolean/Not'
import {Extends} from '../Any/Extends'

/**
Check whether **`U`** contains **`U1`**
@param U to be inspected
@param U1 to check within
@returns [[Boolean]]
@example
```ts
```
*/
export type Has<U extends Union, U1 extends Union> =
    Not<Extends<Exclude<U1, U>, U1>>
