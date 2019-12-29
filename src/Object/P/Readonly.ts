import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Key} from '../../Any/Key'
import {Readonly as OReadonly} from '../Readonly'
import {LastIndex} from '../../List/LastIndex'
import {List} from '../../List/List'
import {Depth} from '../_Internal'

/**
 * @hidden
 */
type _Readonly<O, Path extends List<Key>, depth extends Depth, I extends Iteration = IterationOf<'0'>> =
  O extends object                                              // If it's an object
  ? Pos<I> extends LastIndex<Path>                              // If it's the last index
    ? OReadonly<O, Path[Pos<I>], depth>                         // Use standard ReadOnly
    : {
        [K in keyof O]: K extends Path[Pos<I>]                  // If K is part of Path
                        ? _Readonly<O[K], Path, depth, Next<I>> // Continue diving
                        : O[K]                                  // Not part of path - x
      } & {}
  : O                                                           // Not an object - x

/** Make some fields of **`O`** readonly at **`Path`** (deeply or not)
 * @param O to make readonly
 * @param Path to be followed
 * @param depth (?=`'flat'`) to do it deeply
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Readonly<O extends object, Path extends List<Key>, depth extends Depth = 'flat'> =
    _Readonly<O, Path, depth>
