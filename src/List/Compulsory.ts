import {Depth} from '../Object/_Internal'
import {Compulsory as OCompulsory} from '../Object/Compulsory'
import {Cast} from '../Any/Cast'
import {List} from './List'
import {Key} from '../Any/Key'

/**
Make that **`L`**'s fields cannot be [[Nullable]] or [[Optional]] (it's like
[[Required]] & [[NonNullable]] at once).
@param L to make compulsory
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Compulsory<L extends List, depth extends Depth = 'flat'> =
    Cast<OCompulsory<L, Key, depth>, List>
