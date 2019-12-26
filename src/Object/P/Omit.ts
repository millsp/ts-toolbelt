import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Key} from '../../Any/Key'
import {Omit as OOmit} from '../Omit'
import {LastIndex} from '../../List/LastIndex'
import {List} from '../../List/List'
import {Boolean, False} from '../../Boolean/Boolean'

/**
 * @hidden
 */
type OmitObject<O, Path extends List<Key>, I extends Iteration = IterationOf<'0'>> =
  O extends object                                        // If it's an object
  ? Pos<I> extends LastIndex<Path>                        // If it's the last index
    ? OOmit<O, Path[Pos<I>]>                              // Use standard Omit
    : {
        [K in keyof O]: K extends Path[Pos<I>]            // If K is part of Path
                        ? OmitObject<O[K], Path, Next<I>> // Continue diving
                        : O[K]                            // Not part of path - x
      } & {}
  : O                                                     // Not an object - x

/**
 * @hidden
 */
type OmitArrays<O, Path extends List<Key>, I extends Iteration = IterationOf<'0'>> =
  O extends object                  // Same as above, but
  ? O extends (infer A)[]           // If O is an array
    ? {
        1: OmitArrays<A, Path, I>[] // Dive into the array (TS <3.7)
        0: never
      }[O extends any[] ? 1 : 0]
    : Pos<I> extends LastIndex<Path>
      ? OOmit<O, Path[Pos<I>]>
      : {
          [K in keyof O]: K extends Path[Pos<I>]
                          ? OmitArrays<O[K], Path, Next<I>>
                          : O[K]
        } & {}
  : O

/** Remove out of **`O`** the fields at **`Path`**
 * @param O to remove from
 * @param Path to be followed
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Omit<O extends object, Path extends List<Key>, array extends Boolean = False> = {
  0: OmitObject<O, Path>
  1: OmitArrays<O, Path>
}[array]
