import {Optional as OOptional} from '../Object/Optional'
import {Depth} from '../Object/_Internal'
import {Cast} from '../Any/Cast'
import {List} from './List'

/**
Make **`L`** optional (deeply or not)
@param L to make optional
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Optional<L extends List, depth extends Depth = 'flat'> =
    Cast<OOptional<L, any, depth>, List>
