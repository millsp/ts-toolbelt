import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Key} from '../../Any/Key'
import {_Pick as _OPick} from '../Pick'
import {LastIndex} from '../../List/LastIndex'
import {List} from '../../List/List'
import {Boolean} from '../../Boolean/Boolean'

/**
@hidden
*/
type PickObject<O, Path extends List<Key>, I extends Iteration = IterationOf<'0'>> =
  O extends object                                // if it's an object
  ? _OPick<O, Path[Pos<I>]> extends infer Picked  // pick the current index
    ? Pos<I> extends LastIndex<Path>              // if it's the last index
      ? Picked                                    // return the picked object
      : {                                         // otherwise, continue diving
          [K in keyof Picked]: PickObject<Picked[K], Path, Next<I>>
        } & {}
    : never
  : O                                             // not an object - x

/**
@hidden
*/
type PickList<O, Path extends List<Key>, I extends Iteration = IterationOf<'0'>> =
  O extends object           // same as above, but
  ? O extends (infer A)[]    // if O is an array
    ? PickList<A, Path, I>[] // dive into the array
    : _OPick<O, Path[Pos<I>]> extends infer Picked
      ? Pos<I> extends LastIndex<Path>
        ? Picked
        : {
            [K in keyof Picked]: PickList<Picked[K], Path, Next<I>>
          } & {}
      : never
  : O

/**
Extract out of **`O`** the fields at **`Path`**
@param O to extract from
@param Path to be followed
@param list (?=`0`) `1` to work within object lists
@returns [[Object]]
@example
```ts
```
*/
export type Pick<O extends object, Path extends List<Key>, list extends Boolean = 0> = {
  0: PickObject<O, Path>
  1: PickList<O, Path>
}[list]

type FourDimensions = {
  freedom: number[][] | {
    dive: string
    pp: number
  }[][][][]
  blue: 'zenith'
}
// {freedom: number[][] | {dive: string}[][][][]}
type FreedomDive = Pick<FourDimensions, ['freedom', 'dive'], 1>
