import {_Negate} from './Negate'
import {_IsNegative} from './IsNegative'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Number} from './Number'
import {Formats} from '../Iteration/_Internal'
import {Format} from '../Iteration/Format'
import {NumberMap} from '../Iteration/Maps/Number'
import {Map} from '../Iteration/Map'

/**
@hidden
*/
export type _Absolute<N extends Iteration, IMap extends Map> = {
    0: N
    1: _Negate<N, IMap>
}[_IsNegative<N>]

/**
Get the absolute value of a [[Number]]
@param N to absolute
@param fmt (?=`'s'`) output format
@param IMap to operate with another set of numbers
@returns **`string | number | boolean`**
@example
```ts
import {N} from 'ts-toolbelt'

type test0 = N.Absolute<'-20'>      // '20'

type test1 = N.Absolute<'-20', 's'> // '20'
type test2 = N.Absolute<'-20', 'n'> //  20
```
*/
export type Absolute<N extends Number, fmt extends Formats = 's', IMap extends Map = NumberMap> =
    N extends unknown
    ? Format<_Absolute<IterationOf<N, IMap>, IMap>, fmt>
    : never
