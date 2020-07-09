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
  O extends object                                        // if it's an object
  ? Pos<I> extends LastIndex<Path>                        // if it's the last index
    ? _OOmit<O, Path[Pos<I>]>                             // use standard Omit
    : {
        [K in keyof O]: K extends Path[Pos<I>]            // if K is part of Path
                        ? OmitObject<O[K], Path, Next<I>> // continue diving
                        : O[K]                            // not part of path - x
      } & {}
  : O                                                     // not an object - x

/**
@hidden
*/
type OmitList<O, Path extends List<Key>, I extends Iteration = IterationOf<'0'>> =
  O extends object           // same as above, but
  ? O extends (infer A)[]    // if O is an array
    ? OmitList<A, Path, I>[] // dive into the array
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
