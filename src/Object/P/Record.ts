import {Modx} from '../_Internal'
import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Key} from '../../Any/Key'
import {LastIndex} from '../../List/LastIndex'
import {List} from '../../List/List'

/**
@hidden
*/
type _Record_RR<Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> = {
    readonly [Key in Path[Pos<I>]]: Pos<I> extends LastIndex<Path>
                                    ? A
                                    : _Record_RR<Path, A, Next<I>>
} & {}

/**
@hidden
*/
export type _Record_RW<Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> = {
    [Key in Path[Pos<I>]]: Pos<I> extends LastIndex<Path>
                           ? A
                           : _Record_RW<Path, A, Next<I>>
} & {}

/**
@hidden
*/
type _Record_OR<Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> = {
    readonly [Key in Path[Pos<I>]]?: Pos<I> extends LastIndex<Path>
                                     ? A
                                     : _Record_OR<Path, A, Next<I>>
} & {}

/**
@hidden
*/
type _Record_OW<Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> = {
    [Key in Path[Pos<I>]]?: Pos<I> extends LastIndex<Path>
                            ? A
                            : _Record_OW<Path, A, Next<I>>
} & {}

/**
Create an object filled with **`A`** for the fields at the end of **`Path`**
@param Path to choose fields
@param A to fill fields with
@param modx (?=`['!', 'W']`) to set modifiers
@returns [[Object]]
@example
```ts
```
*/
export type Record<Path extends List<Key>, A, modx extends Modx = ['!', 'W']> = {
  '!': {
      'R': _Record_RR<Path, A>
      'W': _Record_RW<Path, A>
  },
  '?': {
      'R': _Record_OR<Path, A>
      'W': _Record_OW<Path, A>
  }
}[modx[0]][modx[1]]
