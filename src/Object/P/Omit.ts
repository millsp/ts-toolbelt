import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Key} from '../../Any/Key'
import {_Omit as _OOmit} from '../Omit'
import {LastIndex} from '../../List/LastIndex'
import {List} from '../../List/List'
import {Boolean} from '../../Boolean/Boolean'

/**
@hidden
*/
type OmitObject<O, Path extends List<Key>, I extends Iteration = IterationOf<'0'>> =
  O extends object                                        // If it's an object
  ? Pos<I> extends LastIndex<Path>                        // If it's the last index
    ? _OOmit<O, Path[Pos<I>]>                              // Use standard Omit
    : {
        [K in keyof O]: K extends Path[Pos<I>]            // If K is part of Path
                        ? OmitObject<O[K], Path, Next<I>> // Continue diving
                        : O[K]                            // Not part of path - x
      } & {}
  : O                                                     // Not an object - x

/**
@hidden
*/
type OmitList<O, Path extends List<Key>, I extends Iteration = IterationOf<'0'>> =
  O extends object                  // Same as above, but
  ? O extends (infer A)[]           // If O is an array
    ? OmitList<A, Path, I>[]        // Dive into the array
    : Pos<I> extends LastIndex<Path>
      ? _OOmit<O, Path[Pos<I>]>
      : {
          [K in keyof O]: K extends Path[Pos<I>]
                          ? OmitList<O[K], Path, Next<I>>
                          : O[K]
        } & {}
  : O

/**
Remove out of **`O`** the fields at **`Path`**
@param O to remove from
@param Path to be followed
@param list (?=`0`) `1` to work within object lists
@returns [[Object]]
@example
```ts
```
*/
export type Omit<O extends object, Path extends List<Key>, list extends Boolean = 0> = {
  0: OmitObject<O, Path>
  1: OmitList<O, Path>
}[list]
