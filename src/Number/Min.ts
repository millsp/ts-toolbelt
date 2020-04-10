import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Numbers} from './_Internal'
import {Number} from './Number'
import {Formats} from '../Iteration/_Internal'
import {Cast} from '../Any/Cast'
import {Key} from '../Iteration/Key'
import {Prev} from '../Iteration/Prev'
import {_IsPositive} from './IsPositive'
import {Exclude} from '../Union/Exclude'
import {Format} from '../Iteration/Format'
import {Or} from '../Boolean/Or'
import {Extends} from '../Any/Extends'
import {NumberMap} from '../Misc/Iteration/Number'
import {Map} from '../Misc/Iteration/Map'

/**
@hidden
*/
type _MinPositive<N extends Number, IMap extends Map, I extends Iteration = IterationOf<'0', IMap>> = {
    0: _MinPositive<N, IMap, Next<I, IMap>> // Find smallest +
    1: I
}[Or<Extends<Key<I, IMap>, N>, Extends<string, Key<I, IMap>>>] // stops as soon as it finds

/**
@hidden
*/
type MinPositive<N extends Number, IMap extends Map> =
    _MinPositive<N, IMap> extends infer X
    ? Cast<X, Iteration<IMap>>
    : never

/**
@hidden
*/
type _MinNegative<N extends Number, IMap extends Map, I extends Iteration = IterationOf<'0', IMap>> = {
    0: _MinNegative<Exclude<N, Key<I, IMap>>, IMap, Prev<I, IMap>> // Find smallest -
    1: Next<I, IMap>
    2: string
}[
    [N] extends [never]
    ? 1
    : string extends N
      ? 2
      : 0
]

/**
@hidden
*/
type MinNegative<N extends Number, IMap extends Map> =
    _MinNegative<N, IMap> extends infer X
    ? Cast<X, Iteration<IMap>>
    : never

/**
@hidden
*/
export type _Min<N extends Iteration, IMap extends Map> =
    _IsPositive<N, IMap> extends 1 // breaks distribution
    ? MinPositive<Key<N> & Numbers<IMap>['string']['+'], IMap>
    : MinNegative<Key<N> & Numbers<IMap>['string']['-'], IMap>

/**
Get the smallest [[Number]] within an [[Union]]
@param N [[Union]]
@param fmt (?=`'s'`) output format
@returns **`string | number | boolean`**
@example
```ts
import {N} from 'ts-toolbelt'

type test0 = N.Min<'-2' | '10' | '3'>      // '-2'
type test1 = N.Min<'-2' | '10' | '3', 's'> // '-2'
type test2 = N.Min<'-2' | '10' | '3', 'n'> //  -2
type test3 = N.Min<'-2' | '10' | 'oops'>   // string
```
*/
export type Min<N extends Number, fmt extends Formats = 's', IMap extends Map = NumberMap> =
    Format<_Min<IterationOf<N, IMap>, IMap>, fmt, IMap>
