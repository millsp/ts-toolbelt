import {_Negate} from './Negate'
import {_IsNegative} from './IsNegative'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Cast} from '../Any/Cast'
import {Nbr} from './_Internal'
import {Format, FormatMap} from '../Iteration/_Internal'
import {Fmt} from '../Iteration/Fmt'
import {_Minus} from './Minus'

type IsNegative<N extends Iteration> = {
    '0': 'false'
    '+': 'false'
    '-': 'true'
}[N[4]]

export type _Absolute<N extends Iteration> = {
    'true' : _Minus<IterationOf<'0'>, N>
    'false': N
}[IsNegative<N>]

/** Get the absolute value of a **number**
 * @param N to absolute
 * @param fmt output (?=`'s'`)
 * @returns **`string`** or **`number`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.Absolute<'-20'>      // '20'
 *
 * type test1 = N.Absolute<'-20', 's'> // '20'
 * type test2 = N.Absolute<'-20', 'n'> //  20
 * ```
 */
export type Absolute<N extends Nbr, fmt extends Format = 's'> =
    N extends any // force distribution
    ? Fmt<_Absolute<IterationOf<N>>, fmt>
    : never

type t = Absolute<'-2' | '-1'>

type IfABC<C extends 'a' | 'b' | 'c'> =
    C extends 'a'
    ? 'a'
    : C extends 'b'
      ? 'b'
      : 'c'

type test0 = IfABC<'a' | 'b'> // 'a' | 'b'

type NestABC<C extends 'a' | 'b' | 'c'> =
    IfABC<C>

type test1 = IfABC<'a' | 'b'>
