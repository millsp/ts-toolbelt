import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Path as PPath} from './_Internal'
import {Index} from '../../Any/Index'
import {LastIndex} from '../../Tuple/LastIndex'
import {Tuple} from '../../Tuple/Tuple'
import {Select} from '../Select'
import {Key} from '../../Iteration/Key'

type _Omit<O extends object, Path extends Tuple<Index>, I extends Iteration = IterationOf<'0'>> = Select<{                                // No `never` fields
    [K in keyof O]:
      O[K] extends infer Prop                 // Needed for the below to be distributive
      ? K extends Path[Pos<I>]                // If K is part of Path
        ? Key<I> extends LastIndex<Path, 's'> // & if it's the target
          ? never // don't pick               // Update - target
          : Prop extends object               // If it's an object
            ? _Omit<Prop, Path, Next<I>>      // Continue diving
            : Prop // pick it                 // Part of path, but not object - x
        : Prop // pick it                     // Not part of path - x
      : never
}, any> & {}

/** Remove out of **`O`** the fields at **`Path`**
 * (⚠️ this type is expensive)
 * @param O to remove from
 * @param Path to be followed
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Omit<O extends object, Path extends PPath> =
    _Omit<O, Path>
