import {MergeAll as OMergeAll} from '../Object/MergeAll'
import {List} from '../List/List'
import {Depth} from '../Object/_Internal'
import {BuiltInObject} from '../Misc/BuiltInObject'

/**
[[Merge]] a list of [[List]]s into `L`. Merges from left to right, first
items get completed by the next ones (last-in completes).
@param L to start with
@param Ls to merge
@param depth (?=`'flat'`) to do it deeply
@param ignore (?=`BuiltinObject`) types not to merge
@param fill (?=`fill`) types of `O` to be replaced with ones of `O1`
@returns [[List]]
@example
```ts
```
*/
export type MergeAll<L extends List, Ls extends List<List>, depth extends Depth = 'flat', ignore extends object = BuiltInObject, fill extends any = never> =
    OMergeAll<L, Ls, depth, ignore, fill>
