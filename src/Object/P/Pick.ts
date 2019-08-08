import {Length} from '../../Tuple/Length'
import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {NonNullable} from '../../Union/NonNullable'
import {Path as PPath} from './_Internal'
import {Index} from '../../_Internal'
import {Type} from '../../Any/Type'
import {Pick as OPick} from '../Pick'
import {EndOf} from '../../Tuple/EndOf'

type _Pick<O extends object, Path extends Index[], I extends Iteration = IterationOf<'0'>> =
  OPick<O, Path[Pos<I>]> extends infer Picked                      // Pick the first Path
  ? {
      [K in keyof Picked]: NonNullable<Picked[K]> extends object   // > If it's an object
                          ? Pos<I> extends EndOf<Path>             // & If it's the target
                            ? Picked[K]                            // 1-1: Pick it
                            : _Pick<Picked[K] & {}, Path, Next<I>> // 1-0: Continue diving
                          : Picked[K]                              // 0: Pick property
    }
  : never

/** Extract out of **`O`** the fields at **`Path`**
 * @param O to extract from
 * @param Path to be followed
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Pick<O extends object, Path extends PPath> =
    _Pick<O, Path>

interface Test0 {
  foo: {
    foofoo: string;
    barbar: string
  };
  bar?: {
    foofoo: {
      barbar: string
      yogyog: string
    }
    barbar: string
  };
  unneeded: null;
}


type Test1 = {
  a: {
      a: {
          a: 'aaa'
          b: 'aab'
          x: string
      }
      b: {
          a: 'aba'
          b: 'abb'
      }
  }
  b?: {
      a: {
          a: 'baa'
          b: 'bab'
          x: string
      }
      b: {
          a: 'bba'
          b: 'bbb'
      }
  } | undefined
  c?: string
};
