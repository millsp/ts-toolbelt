import {Key} from '../Any/Key'
import {List} from './List'
import {Update as OUpdate} from '../Object/Update'

/**
Update in **`L`** the entries of key **`K`** with **`A`**.
Use the [[x]] placeholder to get the current field type.
@param L to update
@param K to chose fields
@param A to update with
@returns [[List]]
@example
```ts
```
*/
export type Update<L extends List, K extends Key, A extends any> =
    OUpdate<L, K, A>
