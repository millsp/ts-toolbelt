import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Index} from '../../Any/Index'
import {Omit as OOmit} from '../Omit'
import {LastIndex} from '../../List/LastIndex'
import {List} from '../../List/List'

/**
 * @hidden
 */
type _Omit<O, Path extends List<Index>, I extends Iteration = IterationOf<'0'>> =
  O extends object                                   // If it's an object
  ? Pos<I> extends LastIndex<Path>                   // If it's the last index
    ? OOmit<O, Path[Pos<I>]>                         // Use standard Omit
    : {
        [K in keyof O]: K extends Path[Pos<I>]       // If K is part of Path
                        ? _Omit<O[K], Path, Next<I>> // Continue diving
                        : O[K]                       // Not part of path - x
      } & {}
  : O                                                // Not an object - x

/** Remove out of **`O`** the fields at **`Path`**
 * @param O to remove from
 * @param Path to be followed
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Omit<O extends object, Path extends List<Index>> =
    _Omit<O, Path>
