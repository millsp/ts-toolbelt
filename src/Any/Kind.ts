import {Extends} from './Extends'
import {List} from '../List/List'

/**
Get the literal kind of a type
@param A
@returns **`'string' | 'number' | 'function' | 'array' | 'object' | 'boolean'`**
@example
```ts
```
*/
export type Kind<A extends any> =
    Extends<A, Function> extends 1 ? 'function' : // the order  // to
    Extends<A, List>     extends 1 ? 'array'    : // of this is // untangle
    Extends<A, object>   extends 1 ? 'object'   : // important  // object types
    Extends<A, string>   extends 1 ? 'string'   :
    Extends<A, number>   extends 1 ? 'number'   :
    Extends<A, boolean>  extends 1 ? 'boolean'  :
    'unknown'
