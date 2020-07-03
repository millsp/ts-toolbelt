import {_IsNegative} from './IsNegative'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Number} from './Number'
import {NumberMap} from '../Misc/Iteration/Number'
import {Map} from '../Misc/Iteration/Map'

/**
@hidden
*/
export type _IsPositive<N extends Iteration, IMap extends Map> = {
    '-': 0
    '+': 1
    '0': 0
}[N[6]]

/**
Check whether a [[Number]] is positive or not
@param N to check
@param IMap to operate with another set of numbers
@returns [[Boolean]]
@example
```ts
import {N} from 'ts-toolbelt'

type test0 = N.IsPositive<'0'>  // False
type test1 = N.IsPositive<'-7'> // False
type test2 = N.IsPositive<'7'>  // True
```
*/
export type IsPositive<N extends Number, IMap extends Map = NumberMap> =
    _IsPositive<IterationOf<N, IMap>, IMap>
