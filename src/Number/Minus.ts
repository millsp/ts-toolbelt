import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Pos} from '../Iteration/Pos'
import {Prev} from '../Iteration/Prev'
import {Next} from '../Iteration/Next'
import {_IsNegative} from './IsNegative'
import {Cast} from '../Any/Cast'
import {Number} from './Number'
import {Formats} from '../Iteration/_Internal'
import {Format} from '../Iteration/Format'
import {NumberMap} from '../Misc/Iteration/Number'
import {Map} from '../Misc/Iteration/Map'

/**
@hidden
*/
type _MinusPositive<N1 extends Iteration, N2 extends Iteration, IMap extends Map = NumberMap> = {
    0: _MinusPositive<Prev<N1, IMap>, Prev<N2, IMap>, IMap> // N1 = -/+, N2 = +
    1: N1
    2: N2
}[
    Pos<N2, IMap> extends 0         // If successful
    ? 1
    : number extends Pos<N2, IMap>  // If un-success
      ? 2
      : 0                           // Or continue
]

/**
@hidden
*/
type MinusPositive<N1 extends Iteration, N2 extends Iteration, IMap extends Map> =
    _MinusPositive<N1, N2, IMap> extends infer X
    ? Cast<X, Iteration>
    : never

/**
@hidden
*/
type _MinusNegative<N1 extends Iteration, N2 extends Iteration, IMap extends Map> = {
    0: _MinusNegative<Next<N1, IMap>, Next<N2, IMap>, IMap> // N1 = -/+, N2 = -
    1: N1
    2: N2
}[
    Pos<N2, IMap> extends 0         // If successful
    ? 1
    : number extends Pos<N2, IMap>  // If un-success
      ? 2
      : 0                           // Or continue
]

/**
@hidden
*/
type MinusNegative<N1 extends Iteration, N2 extends Iteration, IMap extends Map> =
    _MinusNegative<N1, N2, IMap> extends infer X
    ? Cast<X, Iteration>
    : never

/**
@hidden
*/
export type _Minus<N1 extends Iteration, N2 extends Iteration, IMap extends Map = NumberMap> = {
    0: MinusPositive<N1, N2, IMap>
    1: MinusNegative<N1, N2, IMap>
}[_IsNegative<N2, IMap>]

/**
@hidden
*/
export type __Minus<N1 extends Number, N2 extends Number, fmt extends Formats = 's', IMap extends Map = NumberMap> =
    Format<_Minus<IterationOf<N1, IMap>, IterationOf<N2, IMap>, IMap>, fmt, IMap>

/**
Subtract a [[Number]] from another one
@param N1 Left-hand side
@param N2 Right-hand side
@param fmt (?=`'s'`) output format
@param IMap to operate with another set of numbers
@returns **`string | number | boolean`**
@example
```ts
import {N} from 'ts-toolbelt'

type test0 = N.Minus<'2', '10'>        // '-8'
type test1 = N.Minus<'0', '40'>        // '-40'
type test2 = N.Minus<'0', '40', 's'>   // '-40'
type test3 = N.Minus<'0', '40', 'n'>   //  -40
type test4 = N.Minus<'-20', '40', 's'> // string
type test5 = N.Minus<'-20', '40', 'n'> // number
```
*/
export type Minus<N1 extends Number, N2 extends Number, fmt extends Formats = 's', IMap extends Map = NumberMap> =
    N1 extends unknown
    ? N2 extends unknown
      ? __Minus<N1, N2, fmt, IMap>
      : never
    : never
