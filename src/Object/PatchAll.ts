import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from '../List/Length'
import {Cast} from '../Any/Cast'
import {List} from '../List/List'
import {Extends} from '../Any/Extends'
import {Depth, MergeStyle} from './_Internal'
import {Patch} from './Patch'
import {BuiltInObject} from '../Misc/BuiltInObject'

/**
@hidden
*/
type __PatchAll<O extends object, Os extends List<object>, depth extends Depth, style extends MergeStyle, ignore extends any, I extends Iteration = IterationOf<'0'>> = {
    0: __PatchAll<Patch<O, Os[Pos<I>], depth, style, ignore>, Os, depth, style, ignore, Next<I>>
    1: O
}[Extends<Pos<I>, Length<Os>>]

/**
@hidden
*/
export type _PatchAll<O extends object, Os extends List<object>, depth extends Depth, style extends MergeStyle, ignore extends any> =
    __PatchAll<O, Os, depth, style, ignore> extends infer X
    ? Cast<X, object>
    : never

/**
[[Patch]] a list of [[Object]]s into `O`. Patches from left to right, first
items get completed by the next ones (last-in completes).
@param O to start with
@param Os to patch
@param depth (?=`'flat'`) to do it deeply
@param style (?=`1`) 0 = lodash, 1 = ramda
@param ignore (?=`BuiltinObject`) types not to merge
@returns [[Object]]
@example
```ts
```
*/
export type PatchAll<O extends object, Os extends List<object>, depth extends Depth = 'flat', style extends MergeStyle = 2, ignore extends any = BuiltInObject> =
    O extends unknown
    ? Os extends unknown
      ? _PatchAll<O, Os, depth, style, ignore>
      : never
    : never
