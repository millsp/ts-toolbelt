import {Depth} from '../Object/_Internal'
import {Readonly as OReadonly} from '../Object/Readonly'
import {Cast} from '../Any/Cast'
import {List} from './List'
import {Key} from '../Any/Key'

/**
Make **`L`** readonly (deeply or not)
@param L to make readonly
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Readonly<L extends List, depth extends Depth = 'flat'> =
    Cast<OReadonly<L, Key, depth>, List>
