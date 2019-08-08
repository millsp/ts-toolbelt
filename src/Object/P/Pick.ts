import {Length} from '../../Tuple/Length'
import {Compute} from '../../Any/Compute'
import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {NonNullable} from '../../Union/NonNullable'
import {Path as PPath} from './_Internal'
import {Index} from '../../_Internal'
import {Type} from '../../Any/Type'
import {Filter} from '../Filter'
import {Pick as OPick} from '../Pick'

type Never = Type<{}, 'never'>

// type _Pick<O extends object, Path extends Index[], I extends Iteration = IterationOf<'0'>> = {
//   [K in keyof O]: Compute<                            // Use of `NonNullable` otherwise path cannot be followed #`undefined`
//                   K extends Path[Pos<I>]              // > If `K` is within the `Path`
//                   ? UNonNullable<O[K]> extends object // & If we can dive deeper in `K`
//                     ? _Pick<O[K] & {}, Path, Next<I>> // 1: We dive within the `Path`
//                     : O[K]                            // 0: We just return current
//                                                       // > If `K` isn't within the `Path`
//                   : Pos<I> extends Length<Path>       // & If `Path` has just ended (we just dived the last object)
//                     ? O[K]                            // 1: We just return current (then we've reached the target)
//                     : Never                           // 0: We discard this entry (this entry isn't within `Path`)
//                   >
// } extends infer X ? Filter<X & {}, Never, '<-extends'> : never

type _Pick<O extends object, Path extends Index[], I extends Iteration = IterationOf<'0'>> =
  OPick<O, Path[Pos<I>]> extends infer Picked
  ? {
      [K in keyof Picked]: NonNullable<Picked[K]> extends object
                          ? Pos<Next<I>> extends Length<Path>
                            ? Picked[K]
                            : _Pick<Picked[K] & {}, Path, Next<I>>
                          : Picked[K]
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

type pickedTest0 = Pick<Test0, ['foo' | 'bar', 'foofoo', 'barbar']>
type pickedTest1 = Pick<Test1, ['a' | 'b', 'a' | 'b', 'a']>

type t = Omit<string, 'toString'>
