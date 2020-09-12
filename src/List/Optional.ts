import {OptionalPart} from '../Object/Optional'
import {Depth} from '../Object/_Internal'
import {List} from './List'

/**
Make `L` optional (deeply or not)
@param L to make optional
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Optional<L extends List, depth extends Depth = 'flat'> =
    OptionalPart<L, depth>
