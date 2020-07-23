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
import {NumberMap} from '../Iteration/Maps/Number'
import {Map} from '../Iteration/Map'

/**
@hidden
*/
type _PlusPositive<N1 extends Iteration, N2 extends Iteration, IMap extends Map> = {
    0: _PlusPositive<Next<N1, IMap>, Prev<N2, IMap>, IMap> // N1 = -/+, N2 = +
    1: N1
    2: number
}[
    Pos<N2> extends 0        // If successful
    ? 1
    : number extends Pos<N2> // If un-success
      ? 2
      : 0                    // Or continue
]

/**
@hidden
*/
type PlusPositive<N1 extends Iteration, N2 extends Iteration, IMap extends Map> =
    _PlusPositive<N1, N2, IMap> extends infer X
    ? Cast<X, Iteration>
    : never

/**
@hidden
*/
type _PlusNegative<N1 extends Iteration, N2 extends Iteration, IMap extends Map> = {
    0: _PlusNegative<Prev<N1, IMap>, Next<N2, IMap>, IMap> // N1 = -/+, N2 = -
    1: N1
    2: number
}[
    Pos<N2> extends 0        // If successful
    ? 1
    : number extends Pos<N2> // If un-success
      ? 2
      : 0                    // Or continue
]

/**
@hidden
*/
type PlusNegative<N1 extends Iteration, N2 extends Iteration, IMap extends Map> =
    _PlusNegative<N1, N2, IMap> extends infer X
    ? Cast<X, Iteration>
    : never

/**
@hidden
*/
export type _Plus<N1 extends Iteration, N2 extends Iteration, IMap extends Map = NumberMap> = {
    0: PlusPositive<N1, N2, IMap>
    1: PlusNegative<N1, N2, IMap>
}[_IsNegative<N2>]

/**
@hidden
*/
export type __Plus<N1 extends Number, N2 extends Number, fmt extends Formats = 's', IMap extends Map = NumberMap> =
    Format<_Plus<IterationOf<N1, IMap>, IterationOf<N2, IMap>, IMap>, fmt>

/**
Add a [[Number]] to another one
@param N1 Left-hand side
@param N2 Right-hand side
@param fmt (?=`'s'`) output format
@param IMap to operate with another set of numbers
@returns **`string | number | boolean`**
@example
```ts
import {N} from 'ts-toolbelt'

type test0 = N.Plus<'2', '10'>        // '12'
type test1 = N.Plus<'0', '40'>        // '40'
type test2 = N.Plus<'0', '40', 's'>   // '40'
type test3 = N.Plus<'0', '40', 'n'>   //  40
type test4 = N.Plus<'-20', '40', 's'> // '20'
type test5 = N.Plus<'-20', '40', 'n'> //  20
```
*/
export type Plus<N1 extends Number, N2 extends Number, fmt extends Formats = 's', IMap extends Map = NumberMap> =
    N1 extends unknown
    ? N2 extends unknown
    ? __Plus<N1, N2, fmt, IMap>
    : never
    : never
