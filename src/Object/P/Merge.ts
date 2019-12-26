import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Key} from '../../Any/Key'
import {Merge as OMerge} from '../Merge'
import {Length} from '../../List/Length'
import {List} from '../../List/List'
import {Depth} from '../_Internal'
import {Boolean, False} from '../../Boolean/Boolean'

/**
 * @hidden
 */
type MergeObject<O, Path extends List<Key>, O1 extends object, depth extends Depth, I extends Iteration = IterationOf<'0'>> =
  O extends object                                                    // If it's an object
  ? Pos<I> extends Length<Path>                                       // If we've reached the end
    ? OMerge<O, O1, depth>                                            // Use standard Merge
    : {
        [K in keyof O]: K extends Path[Pos<I>]                        // If K is part of Path
                        ? MergeObject<O[K], Path, O1, depth, Next<I>> // Continue diving
                        : O[K]                                        // Not part of path - x
      } & {}
  : O                                                                 // Not an object - x

/**
 * @hidden
 */
type MergeArrays<O, Path extends List<Key>, O1 extends object, depth extends Depth, I extends Iteration = IterationOf<'0'>> =
  O extends object                              // Same as above, but
  ? O extends (infer A)[]                       // If O is an array
    ? {
        1: MergeArrays<A, Path, O1, depth, I>[] // Dive into the array (TS <3.7)
        0: never
      }[O extends any[] ? 1 : 0]
    : Pos<I> extends Length<Path>
      ? OMerge<O, O1, depth>
      : {
          [K in keyof O]: K extends Path[Pos<I>]
                          ? MergeArrays<O[K], Path, O1, depth, Next<I>>
                          : O[K]
        } & {}
    : O

/** Complete the fields of **`O`** at **`Path`** with the ones of **`O1`**
 * @param O to complete
 * @param Path to be followed
 * @param O1 to copy from
 * @param (?=`'flat'`) depth to do it deeply
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Merge<O extends object, Path extends List<Key>, O1 extends object, depth extends Depth = 'flat', array extends Boolean = False> = {
  0: MergeObject<O, Path, O1, depth>
  1: MergeArrays<O, Path, O1, depth>
}[array]
