import {Record} from '../../Object/Record'
import {Compute} from '../../Any/Compute'
import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Readonly as OReadonly} from '../Readonly'
import {Last} from '../../Tuple/Last'
import {Pop} from '../../Tuple/Pop'
import {Depth} from '../_Internal'
import {Path as PPath} from './_Internal'
import {Prepend} from '../../Tuple/Prepend'
import {Index} from '../../Any/Index'
import {LastIndex} from '../../Tuple/LastIndex'
import {Tuple} from '../../Tuple/Tuple'
import {Key} from '../../Iteration/Key'

type _Readonly<O extends object, Path extends Tuple<Index>, K extends Index, depth extends Depth, I extends Iteration = IterationOf<'0'>> = {
  [P in keyof O]:
    O[P] extends infer Prop                          // Needed for the below to be distributive
    ? P extends Path[Pos<I>]                         // If K is part of Path
      ? Prop extends object                          // & prop is object
        ? Key<I> extends LastIndex<Path, 's'>        // & if it's the target
          ? OReadonly<Prop, K, depth> // immutable   // Update - target
          : _Readonly<Prop, Path, K, depth, Next<I>> // Or continue diving
        : Prop // don't update                       // Part of path, but not object - x
      : Prop // don't update                         // Not part of path - x
    : never
} & {}

/** Make some fields of **`O`** readonly at **`Path`** (deeply or not)
 * (⚠️ this type is expensive)
 * @param O to make readonly
 * @param Path to be followed
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Readonly<O extends object, Path extends PPath, depth extends Depth = 'flat'> =
    _Readonly<Record<'_', O>, Pop<Prepend<Path, '_'>>, Last<Path>, depth>['_']
    // We have nested `O` to be able to perform 0-depth operations as well
