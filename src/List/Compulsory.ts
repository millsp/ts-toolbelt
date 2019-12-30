import {Depth} from '../Object/_Internal'
import {Compulsory as OCompulsory} from '../Object/Compulsory'
import {Cast} from '../Any/Cast'
import {List} from './List'

/**
Make **`L`** compulsory (deeply or not)
@param L to make compulsory
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Compulsory<L extends List, depth extends Depth = 'flat'> =
    Cast<OCompulsory<L, any, depth>, List>
