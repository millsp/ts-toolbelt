import {PatchAll as OPatchAll} from '../Object/PatchAll'
import {List} from '../List/List'
import {Depth} from '../Object/_Internal'

/**
[[Patch]] a list of [[List]]s into **`L`**. Patches from left to right, first
items get completed by the next ones (last-in completes).
@param O to start with
@param Os to patch
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type PatchAll<O extends List, Ls extends List<List>, depth extends Depth = 'flat'> =
    OPatchAll<O, Ls, depth, 0>
