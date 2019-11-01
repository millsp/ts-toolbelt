import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Path as PPath} from './_Internal'
import {Index} from '../../Any/Index'
import {Pick as OPick} from '../Pick'
import {LastIndex} from '../../Tuple/LastIndex'
import {Tuple} from '../../Tuple/Tuple'

/**
 * @internal
 */
type _Pick<O, Path extends Tuple<Index>, I extends Iteration = IterationOf<'0'>> =
  O extends object                                // If it's an object
  ? OPick<O, Path[Pos<I>]> extends infer Picked   // Pick the current index
    ? Pos<I> extends LastIndex<Path>              // If it's the last index
      ? Picked                                    // Return the picked object
      : {                                         // Otherwise, continue diving
          [K in keyof Picked]: _Pick<Picked[K], Path, Next<I>>
        } & {}
    : never
  : O                                             // Not an object - x

/** Extract out of **`O`** the fields at **`Path`**
 * (⚠️ this type is expensive)
 * @param O to extract from
 * @param Path to be followed
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Pick<O extends object, Path extends PPath> =
    _Pick<O, Path>
