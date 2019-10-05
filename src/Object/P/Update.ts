import {Compute} from '../../Any/Compute'
import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Path as PPath} from './_Internal'
import {Index} from '../../Any/Index'
import {LastIndex} from '../../Tuple/LastIndex'
import {Tuple} from '../../Tuple/Tuple'
import {Key} from '../../Iteration/Key'

type _Update<O extends object, Path extends Tuple<Index>, A, I extends Iteration = IterationOf<'0'>> = {
  [K in keyof O]:
    O[K] extends infer Prop                 // Needed for the below to be distributive
    ? K extends Path[Pos<I>]                // If K is part of Path
      ? Key<I> extends LastIndex<Path, 's'> // & if it's the target
        ? A // update it                    // Update - target
        : Prop extends object               // If prop is an object
          ? _Update<Prop, Path, A, Next<I>> // Continue diving
          : Prop // don't update            // Part of path, but not object - x
      : Prop // don't update                // Not part of path - x
    : never
} & {}

/** Update in **`O`** the fields at **`Path`** with **`A`**
 * (⚠️ this type is expensive)
 * @param O to update
 * @param Path to be followed
 * @param A to update with
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Update<O extends object, Path extends PPath, A extends any> =
    _Update<O, Path, A>
