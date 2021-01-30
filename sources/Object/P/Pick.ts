import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Key} from '../../Any/Key'
import {_Pick as _OPick} from '../Pick'
import {_Pick as _LPick} from '../../List/Pick'
import {LastKey} from '../../List/LastKey'
import {List} from '../../List/List'
import {Boolean} from '../../Boolean/_Internal'

/**
 * @hidden
 */
type Action<O extends object, K extends Key> =
  O extends List
  ? number extends O['length']
    ? Action<O[number], Key>[]
    : _LPick<O, (string | number)>
  : _OPick<O, K>

/**
 * @hidden
 */
type PickObject<O, Path extends List<Key>, I extends Iteration = IterationOf<0>> =
  O extends object                                // If it's an object
  ? Action<O, Path[Pos<I>]> extends infer Picked  // Pick the current index
    ? Pos<I> extends LastKey<Path>              // If it's the last index
      ? Picked                                    // Return the picked object
      : {                                         // Otherwise, continue diving
          [K in keyof Picked]: PickObject<Picked[K], Path, Next<I>>
        } & {}
    : never
  : O                                             // Not an object - x

/**
 * @hidden
 */
type PickList<O, Path extends List<Key>, I extends Iteration = IterationOf<0>> =
  O extends object                  // Same as above, but
  ? O extends (infer A)[]           // If O is an array
    ? PickList<A, Path, I>[]        // Dive into the array
    : _OPick<O, Path[Pos<I>]> extends infer Picked
      ? Pos<I> extends LastKey<Path>
        ? Picked
        : {
            [K in keyof Picked]: PickList<Picked[K], Path, Next<I>>
          } & {}
      : never
  : O

/**
 * Extract out of `O` the fields at `Path`
 * @param O to extract from
 * @param Path to be followed
 * @param list (?=`0`) `1` to work within object lists of arbitrary depth
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type Pick<O extends object, Path extends List<Key>, list extends Boolean = 0> = {
  0: PickObject<O, Path>
  1: PickList<O, Path>
}[list]
