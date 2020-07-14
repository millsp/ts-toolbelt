import {Merge as OMerge} from '../Object/Merge'
import {List} from './List'
import {Depth} from '../Object/_Internal'

/**
Accurately merge the fields of **`L`** with the ones of **`L1`**. It is
equivalent to the spread operator in JavaScript. [[Union]]s and [[Optional]]
fields will be handled gracefully.

(⚠️ needs `--strictNullChecks` enabled)
@param L to complete
@param L1 to copy from
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Merge<L extends List, L1 extends List, depth extends Depth = 'flat'> =
    OMerge<L, L1, depth, 0>
