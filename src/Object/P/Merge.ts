import {Merge as OMerge} from '../Merge'
import {Compute} from '../../Any/Compute'
import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Path as PPath} from './_Internal'
import {Index} from '../../Any/Index'
import {EndOf} from '../../Tuple/EndOf'
import {Depth} from '../_Internal'
import {Tuple} from '../../Tuple/Tuple'

type _Merge<O extends object, Path extends Tuple<Index>, O1 extends object, depth extends Depth, I extends Iteration = IterationOf<'0'>> = {
  [K in keyof O]:
    O[K] extends infer Prop                        // Needed for the below to be distributive
    ? K extends Path[Pos<I>]                       // If K is part of Path
      ? Prop extends object                        // & if it's an object
        ? Pos<I> extends EndOf<Path>               // & if it's the target
          ? OMerge<Prop, O1, depth> // merge it    // Update - target
          : _Merge<Prop, Path, O1, depth, Next<I>> // Or continue diving
        : Prop                                     // Part of path, but not object - x
      : Prop                                       // Not part of path - x
    : never
} & {}

/** Complete the fields of **`O`** at **`Path`** with the ones of **`O1`**
 * (⚠️ this type is expensive)
 * @param O to complete
 * @param Path to be followed
 * @param O1 to copy from
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Merge<O extends object, Path extends PPath, O1 extends object, depth extends Depth = 'flat'> =
   _Merge<O, Path, O1, depth>
