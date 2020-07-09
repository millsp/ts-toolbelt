import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Key} from '../../Any/Key'
import {Readonly as OReadonly} from '../Readonly'
import {LastIndex} from '../../List/LastIndex'
import {List} from '../../List/List'
import {Depth} from '../_Internal'
import {Boolean} from '../../Boolean/Boolean'

/**
@hidden
*/
type ReadonlyObject<O, Path extends List<Key>, depth extends Depth, I extends Iteration = IterationOf<'0'>> =
  O extends object                                                   // if it's an object
  ? Pos<I> extends LastIndex<Path>                                   // if it's the last index
    ? OReadonly<O, Path[Pos<I>], depth>                              // use standard ReadOnly
    : {
        [K in keyof O]: K extends Path[Pos<I>]                       // if K is part of Path
                        ? ReadonlyObject<O[K], Path, depth, Next<I>> // continue diving
                        : O[K]                                       // not part of path - x
      } & {}
  : O                                                                // not an object - x

/**
@hidden
*/
type ReadonlyArrays<O, Path extends List<Key>, depth extends Depth, I extends Iteration = IterationOf<'0'>> =
  O extends object                        // same as above, but
  ? O extends (infer A)[]                 // if O is an array
    ? ReadonlyArrays<A, Path, depth, I>[] // dive into the array
    : Pos<I> extends LastIndex<Path>
      ? OReadonly<O, Path[Pos<I>], depth>
      : {
          [K in keyof O]: K extends Path[Pos<I>]
                          ? ReadonlyArrays<O[K], Path, depth, Next<I>>
                          : O[K]
        } & {}
  : O

/**
Make some fields of **`O`** readonly at **`Path`** (deeply or not)
@param O to make readonly
@param Path to be followed
@param depth (?=`'flat'`) to do it deeply
@param list (?=`0`) `1` to work within object lists
@returns [[Object]]
@example
```ts
```
*/
export type Readonly<O extends object, Path extends List<Key>, depth extends Depth = 'flat', list extends Boolean = 0> = {
  0: ReadonlyObject<O, Path, depth>
  1: ReadonlyArrays<O, Path, depth>
}[list]

