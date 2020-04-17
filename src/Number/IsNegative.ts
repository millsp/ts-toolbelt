import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Number} from './Number'
import {NumberMap} from '../Misc/Iteration/Number'
import {Map} from '../Misc/Iteration/Map'

/**
@hidden
*/
export type _IsNegative<N extends Iteration, IMap extends Map> = {
    '-': 1
    '+': 0
    '0': 0
}[N[6]]

/**
Check whether a [[Number]] is negative or not
@param N to check
@param IMap to operate with another set of numbers
@returns [[Boolean]]
@example
```ts
import {N} from 'ts-toolbelt'

type test0 = N.IsNegative<'0'>  // False
type test1 = N.IsNegative<'-7'> // True
type test2 = N.IsNegative<'7'>  // False
```
*/
export type IsNegative<N extends Number, IMap extends Map = NumberMap> =
    _IsNegative<IterationOf<N, IMap>, IMap>
