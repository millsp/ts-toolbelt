import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Key} from '../../Any/Key'
import {Merge as OMerge} from '../Merge'
import {Length} from '../../List/Length'
import {List} from '../../List/List'
import {Depth} from '../_Internal'
import {Boolean} from '../../Boolean/Boolean'

/**
@hidden
*/
type MergeObject<O, Path extends List<Key>, O1 extends object, depth extends Depth, I extends Iteration = IterationOf<'0'>> =
  O extends object                                                    // if it's an object
  ? Pos<I> extends Length<Path>                                       // if we've reached the end
    ? OMerge<O, O1, depth>                                            // use standard Merge
    : {
        [K in keyof O]: K extends Path[Pos<I>]                        // if K is part of Path
                        ? MergeObject<O[K], Path, O1, depth, Next<I>> // continue diving
                        : O[K]                                        // not part of path - x
      } & {}
  : O                                                                 // not an object - x

/**
@hidden
*/
type MergeList<O, Path extends List<Key>, O1 extends object, depth extends Depth, I extends Iteration = IterationOf<'0'>> =
  O extends object                       // same as above, but
  ? O extends (infer A)[]                // if O is an array
    ? MergeList<A, Path, O1, depth, I>[] // dive into the array
    : Pos<I> extends Length<Path>
      ? OMerge<O, O1, depth>
      : {
          [K in keyof O]: K extends Path[Pos<I>]
                          ? MergeList<O[K], Path, O1, depth, Next<I>>
                          : O[K]
        } & {}
    : O

/**
Complete the fields of **`O`** at **`Path`** with the ones of **`O1`**
@param O to complete
@param Path to be followed
@param O1 to copy from
@param depth (?=`'flat'`) to do it deeply
@param list (?=`0`) `1` to work within object lists
@returns [[Object]]
@example
```ts
```
*/
export type Merge<O extends object, Path extends List<Key>, O1 extends object, depth extends Depth = 'flat', list extends Boolean = 0> = {
  0: MergeObject<O, Path, O1, depth>
  1: MergeList<O, Path, O1, depth>
}[list]
