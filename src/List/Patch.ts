import {Patch as OPatch} from '../Object/Patch'
import {List} from './List'
import {Depth} from '../Object/_Internal'

/**
Complete the fields of **`L`** with the ones of **`L1`**. This is a version of
[[Merge]] that does NOT handle optional fields, it only completes fields of `O`
with the ones of `O1` if they don't exist.

(⚠️ needs `--strictNullChecks` enabled)
@param L to complete
@param L1 to copy from
@param depth (?=`'flat'`) to do it deeply
@param style (?=`1`) 0 = lodash, 1 = ramda
@returns [[List]]
@example
```ts
```
*/
export type Patch<L extends List, L1 extends List, depth extends Depth = 'flat'> =
    OPatch<L, L1, depth, 0>
