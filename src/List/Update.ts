import {Key} from '../Any/Key'
import {List} from './List'
import {Update as OUpdate} from '../Object/Update'
import {Depth} from '../Object/_Internal'
import {NumberOf} from '../Any/_Internal'
import {Cast} from '../Any/Cast'

/**
Update in `L` the entries of key `K` with `A`.
Use the [[x]] placeholder to get the current field type.
@param L to update
@param K to chose fields
@param A to update with
@returns [[List]]
@example
```ts
```
*/
export type Update<L extends List, K extends Key, A extends any, depth extends Depth = 'flat'> =
    Cast<OUpdate<L, NumberOf<K>, A, depth>, List>
