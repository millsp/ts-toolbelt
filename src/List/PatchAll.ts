import {PatchAll as OPatchAll} from '../Object/PatchAll'
import {List} from '../List/List'
import {Depth} from '../Object/_Internal'
import {BuiltInObject} from '../Misc/BuiltInObject'

/**
[[Patch]] a list of [[List]]s into `L`. Patches from left to right, first
items get completed by the next ones (last-in completes).
@param O to start with
@param Os to patch
@param depth (?=`'flat'`) to do it deeply
@param ignore (?=`BuiltinObject`) types not to merge
@param fill (?=`fill`) types of `O` to be replaced with ones of `O1`
@returns [[List]]
@example
```ts
```
*/
export type PatchAll<O extends List, Ls extends List<List>, depth extends Depth = 'flat', ignore extends object = BuiltInObject, fill extends any = never> =
    OPatchAll<O, Ls, depth, ignore, fill>
