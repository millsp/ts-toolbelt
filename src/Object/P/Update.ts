import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Key} from '../../Any/Key'
import {Update as OUpdate} from '../Update'
import {LastIndex} from '../../List/LastIndex'
import {List} from '../../List/List'
import {Has} from '../../Union/Has'
import {Keys} from '../../Union/Keys'

/**
 * @hidden
 */
type _Update<O, Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> =
  Pos<I> extends LastIndex<Path>                                     // If it's the last index
  ? OUpdate<O & {}, Path[Pos<I>], A>                                 // Use standard Update
  : (O & Record<Exclude<Path[Pos<I>], Keys<O>>, {}>) extends infer O // we make that we can dive in an object even if the path does not exist within
    ? {                                                              // ^^^ this way, we create sub-empty-objects for the keys that don't exist in `O`
        [K in keyof O]: K extends Path[Pos<I>]                       // ?> for the keys `K` that are in the path
                        ? O[K] extends infer OK                      //    > we make that property distributable
                          ? Has<OK, object> extends 1                //      ?> if that union has at least an object
                            ? OK extends object                      //        > we distribute over objects
                              ? _Update<OK, Path, A, Next<I>>        //          ?> it is an object, continue diving
                              : OK                                   //          !> otherwise, we leave the property as is
                            : _Update<{}, Path, A, Next<I>>          //      !> if union had no object, we can only replace it
                          : never
                        : O[K]                                       // !> `K` is not part of path, do nothing
      } & {}
    : never

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
