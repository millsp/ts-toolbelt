import {MergeAll as OMergeAll} from '../Object/MergeAll'
import {List} from '../List/List'
import {Depth} from '../Object/_Internal'

/**
[[Merge]] a list of [[List]]s into `L`. Merges from left to right, first
items get completed by the next ones (last-in completes).
@param O to start with
@param Os to merge
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type MergeAll<O extends List, Ls extends List<List>, depth extends Depth = 'flat'> =
    OMergeAll<O, Ls, depth, 0>
