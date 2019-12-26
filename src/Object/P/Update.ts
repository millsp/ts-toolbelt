import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Key} from '../../Any/Key'
import {Update as OUpdate} from '../Update'
import {LastIndex} from '../../List/LastIndex'
import {List} from '../../List/List'
import {_RecordReqW as _RecordP} from './Record'
import {Record} from '../Record'

/**
 * @hidden
 */
type _Update<O, Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> =
  O extends object                                                    // If it's an object
  ? Pos<I> extends LastIndex<Path>                                    // If it's the last index
    ? OUpdate<O, Path[Pos<I>], A>                                     // Use standard Update
    : (O & Record<Exclude<Path[Pos<I>], keyof O>, 0>) extends infer O // Fill in missing keys with non-object
      ? {
          [K in keyof O]: K extends Path[Pos<I>]                      // If K is part of path
                          ? _Update<O[K], Path, A, Next<I>>           // Keep diving
                          : O[K]                                      // Not part of path - x
        } & {}
      : never
  : O extends null | undefined  // O is not an object - if it's null or undefined
    ? O                         // Keep as-is
    : _RecordP<Path, A, I>      // Otherwise replace with remaining path

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
export type Update<O extends object, Path extends List<Key>, A extends any> =
    _Update<O, Path, A>
