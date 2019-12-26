import {Modx} from '../_Internal'
import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Key} from '../../Any/Key'
import {LastIndex} from '../../List/LastIndex'
import {List} from '../../List/List'

/**
 * @hidden
 */
type _RecordReqR<Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> =
  {
    readonly [Key in Path[Pos<I>]]: Pos<I> extends LastIndex<Path>
                                    ? A
                                    : _RecordReqR<Path, A, Next<I>>
  } & {}

/**
 * @hidden
 */
type _RecordReqW<Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> =
  {
    [Key in Path[Pos<I>]]: Pos<I> extends LastIndex<Path>
                           ? A
                           : _RecordReqW<Path, A, Next<I>>
  } & {}

/**
 * @hidden
 */
type _RecordOptR<Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> =
  {
    readonly [Key in Path[Pos<I>]]?: Pos<I> extends LastIndex<Path>
                                     ? A
                                     : _RecordOptR<Path, A, Next<I>>
  } & {}

/**
 * @hidden
 */
type _RecordOptW<Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> =
  {
    [Key in Path[Pos<I>]]?: Pos<I> extends LastIndex<Path>
                            ? A
                            : _RecordOptW<Path, A, Next<I>>
  } & {}

/** Create an object filled with **`A`** for the fields at the end of **`Path`**
 * @param Path to choose fields
 * @param A to fill fields with
 * @param modx (?=`['!', 'W']`) to set modifiers
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Record<Path extends List<Key>, A, modx extends Modx = ['!', 'W']> = {
  '!': {
      'R': _RecordReqR<Path, A>
      'W': _RecordReqW<Path, A>
  },
  '?': {
      'R': _RecordOptR<Path, A>
      'W': _RecordOptW<Path, A>
  }
}[modx[0]][modx[1]]
