import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Path as PPath} from './_Internal'
import {Index} from '../../Any/Index'
import {Pick as OPick} from '../Pick'
import {LastIndex} from '../../Tuple/LastIndex'
import {Tuple} from '../../Tuple/Tuple'
import {Key} from '../../Iteration/Key'

type _Pick<O extends object, Path extends Tuple<Index>, I extends Iteration = IterationOf<'0'>> =
  OPick<O, Path[Pos<I>]> extends infer Picked // Pick the first Path
  ? {
      [K in keyof Picked]:
        Picked[K] extends infer Prop            // Needed for the below to be distributive
        ? Prop extends object                   // > If it's an object
          ? Key<I> extends LastIndex<Path, 's'> // & If it's the target
            ? Prop                              // 1-1: Pick it
            : _Pick<Prop, Path, Next<I>>        // 1-0: Continue diving
          : Prop                                // 0: Pick property
        : never
    } & {}
  : never

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
