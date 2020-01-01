import {Depth} from '../Object/_Internal'
import {Required as ORequired} from '../Object/Required'
import {Cast} from '../Any/Cast'
import {List} from './List'
import {Key} from '../Any/Key'

/**
Make **`L`** required (deeply or not)
@param L to make required
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Required<L extends List, depth extends Depth = 'flat'> =
    Cast<ORequired<L, Key, depth>, List>
