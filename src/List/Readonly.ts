import {Depth} from '../Object/_Internal'
import {ReadonlyPart} from '../Object/Readonly'
import {List} from './List'

/**
Make `L` readonly (deeply or not)
@param L to make readonly
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Readonly<L extends List, depth extends Depth = 'flat'> =
    ReadonlyPart<L, depth>
