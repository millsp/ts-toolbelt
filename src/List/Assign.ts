import {Assign as OAssign} from '../Object/Assign'
import {List} from './List'
import {Depth} from '../Object/_Internal'
import {BuiltInObject} from '../Misc/BuiltInObject'
import {Cast} from '../Any/Cast'

/**
Assign a list of [[List]] into `L` with [[Merge]]. Merges from left to
right, first items get overridden by the next ones (last-in overrides).
@param L to assign to
@param Ls to assign
@param depth (?=`'flat'`) to do it deeply
@param ignore (?=`BuiltinObject`) types not to merge
@param fill (?=`fill`) types of `O` to be replaced with ones of `O1`
@returns [[Object]]
@example
```ts
```
*/
export type Assign<L extends List, Ls extends List<List>, depth extends Depth = 'flat', ignore extends object = BuiltInObject, fill extends any = never> =
    Cast<OAssign<L, Ls, depth, ignore, fill>, List>
