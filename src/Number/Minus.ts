import {IterationOf, Iteration} from '../Iteration/IterationOf'
import {Pos} from '../Iteration/Pos'
import {Prev} from '../Iteration/Prev'
import {Next} from '../Iteration/Next'
import {_IsNegative} from './IsNegative'
import {Cast} from '../Any/Cast'
import {Nbr} from './_Internal'
import {Format} from '../Iteration/_Internal'

type MinusPositive<N1 extends Iteration, N2 extends Iteration> = {
    0: MinusPositive<Prev<N1>, Prev<N2>> // N1 = -/+, N2 = +
    1: N1
    2: N2
}[
    Pos<N2> extends 0           // If successful
    ? 1
    : number extends Pos<N2>    // If un-success
      ? 2
      : 0                       // Or continue
]

type MinusNegative<N1 extends Iteration, N2 extends Iteration> = {
    0: MinusNegative<Next<N1>, Next<N2>> // N1 = -/+, N2 = -
    1: N1
    2: N2
}[
    Pos<N2> extends 0           // If successful
    ? 1
    : number extends Pos<N2>    // If un-success
      ? 2
      : 0                       // Or continue
]

export type _Minus<N1 extends Iteration, N2 extends Iteration> =
    _IsNegative<N2> extends true
    ? MinusNegative<N1, N2>
    : MinusPositive<N1, N2>

/** Subtract a **number** from another one
 * @param N1 Left-hand side
 * @param N2 Right-hand side
 * @param fmt output (?=`'s'`)
 * @returns **`string`** or **`number`**
 * @example
 */
export type Minus<N1 extends Nbr, N2 extends Nbr, fmt extends Format = 's'> =
    _Minus<IterationOf<N1>, IterationOf<N2>> extends infer I
    ? Pos<Cast<I, Iteration>, fmt>
    : never

// type Test0<N extends Nbr> = [ // 60 Ops
//     Minus<'0', N>,
//     Minus<'1', N>,
//     Minus<'2', N>,
//     Minus<'3', N>,
//     Minus<'4', N>,
//     Minus<'5', N>,
//     Minus<'6', N>,
//     Minus<'7', N>,
//     Minus<'8', N>,
//     Minus<'9', N>,
//     Minus<'10', N>,
//     Minus<'11', N>,
//     Minus<'12', N>,
//     Minus<'13', N>,
//     Minus<'14', N>,
//     Minus<'15', N>,
//     Minus<'16', N>,
//     Minus<'17', N>,
//     Minus<'18', N>,
//     Minus<'19', N>,
//     Minus<'20', N>,
//     Minus<'21', N>,
//     Minus<'22', N>,
//     Minus<'23', N>,
//     Minus<'24', N>,
//     Minus<'25', N>,
//     Minus<'26', N>,
//     Minus<'27', N>,
//     Minus<'28', N>,
//     Minus<'29', N>,
//     Minus<'30', N>,
//     Minus<'-1', N>,
//     Minus<'-2', N>,
//     Minus<'-3', N>,
//     Minus<'-4', N>,
//     Minus<'-5', N>,
//     Minus<'-6', N>,
//     Minus<'-7', N>,
//     Minus<'-8', N>,
//     Minus<'-9', N>,
//     Minus<'-10', N>,
//     Minus<'-11', N>,
//     Minus<'-12', N>,
//     Minus<'-13', N>,
//     Minus<'-14', N>,
//     Minus<'-15', N>,
//     Minus<'-16', N>,
//     Minus<'-17', N>,
//     Minus<'-18', N>,
//     Minus<'-19', N>,
//     Minus<'-20', N>,
//     Minus<'-21', N>,
//     Minus<'-22', N>,
//     Minus<'-23', N>,
//     Minus<'-24', N>,
//     Minus<'-25', N>,
//     Minus<'-26', N>,
//     Minus<'-27', N>,
//     Minus<'-28', N>,
//     Minus<'-29', N>,
//     Minus<'-30', N>,
// ]

// type Test1<N extends Nbr, Test00 = Test0<N>> = { // 3600 Ops
//     [K in keyof Test00]: Test0<Cast<Test00[K], string>>
// }

// type Test2<N extends Nbr, Test00 = Test0<N>> = { // 216000 Ops
//     [K in keyof Test00]: Test1<Cast<Test00[K], string>>
// }

// type t = Test2<'-14'>

