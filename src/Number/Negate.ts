import {_Minus} from './Minus'
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
export type _Negate<N extends Iteration, IMap extends Map> =
    IterationOf<N[4], IMap>

/**
Negate a [[Number]]
@param N to negate
@param fmt (?=`'s'`) output format
@param IMap to operate with another set of numbers
@returns `string | number | boolean`
@example
```ts
import {N} from 'ts-toolbelt'

type test0 = N.Negate<'-10'>     //  '10'
type test1 = N.Negate<'10'>      // '-10'
type test2 = N.Negate<'10', 's'> // '-10'
type test3 = N.Negate<'10', 'n'> //  -10
type test4 = N.Negate<'-100'>    // string
```
*/
export type Negate<N extends Number, fmt extends Formats = 's', IMap extends Map = NumberMap> =
    N extends unknown
    ? Format<_Negate<IterationOf<N, IMap>, IMap>, fmt>
    : never
