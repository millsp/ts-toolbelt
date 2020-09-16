import {Key} from '../Any/Key'
import {Depth} from '../Object/_Internal'
import {List} from './List'
import {Update} from '../Object/Update'
import {x} from '../Any/x'
import {NumberOf} from '../Any/_Internal'
import {Cast} from '../Any/Cast'

/**
Make some entries of `L` nullable (deeply or not)
@param L to make nullable
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Nullable<L extends List, K extends Key = Key, depth extends Depth = 'flat'> =
    Cast<Update<L, NumberOf<K>, x | null | undefined, depth>, List>
