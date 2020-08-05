import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {Merge} from './Merge'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from '../List/Length'
import {Cast} from '../Any/Cast'
import {List} from '../List/List'
import {Extends} from '../Any/Extends'
import {Depth, MergeStyle} from './_Internal'
import {BuiltInObject} from '../Misc/_api'

/**
@hidden
*/
type __MergeAll<O extends object, Os extends List<object>, depth extends Depth, style extends MergeStyle, noMerge extends any, I extends Iteration = IterationOf<'0'>> = {
    0: __MergeAll<Merge<O, Os[Pos<I>], depth, style, noMerge>, Os, depth, style, noMerge, Next<I>>
    1: O
}[Extends<Pos<I>, Length<Os>>]

/**
@hidden
*/
export type _MergeAll<O extends object, Os extends List<object>, depth extends Depth, style extends MergeStyle, noMerge extends any> =
    __MergeAll<O, Os, depth, style, noMerge> extends infer X
    ? Cast<X, object>
    : never

/**
[[Merge]] a list of [[Object]]s into **`O`**. Merges from left to right, first
items get completed by the next ones (last-in completes).
@param O to start with
@param Os to merge
@param depth (?=`'flat'`) to do it deeply
@param style (?=`1`) 0 = lodash, 1 = ramda
@param noMerge (?=`BuiltinObject`) types not to merge
@returns [[Object]]
@example
```ts
```
*/
export type MergeAll<O extends object, Os extends List<object>, depth extends Depth = 'flat', style extends MergeStyle = 2, noMerge extends any = BuiltInObject> =
    O extends unknown
    ? Os extends unknown
      ? _MergeAll<O, Os, depth, style, noMerge>
      : never
    : never
