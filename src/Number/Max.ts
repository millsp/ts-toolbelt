import {Prev} from '../Iteration/Prev'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Numbers} from './_Internal'
import {Number} from './Number'
import {Formats} from '../Iteration/_Internal'
import {Key} from '../Iteration/Key'
import {_IsNegative} from './IsNegative'
import {Exclude} from '../Union/Exclude'
import {Cast} from '../Any/Cast'
import {Format} from '../Iteration/Format'
import {Extends} from '../Any/Extends'
import {Or} from '../Boolean/Or'
import {NumberMap} from '../Misc/Iteration/Number'
import {Map} from '../Misc/Iteration/Map'

/**
@hidden
*/
type _MaxPositive<N extends Number, IMap extends Map, I extends Iteration = IterationOf<'0', IMap>> = {
    0: _MaxPositive<Exclude<N, Key<I, IMap>>, IMap, Next<I, IMap>> // Find biggest +
    1: Prev<I, IMap>
    2: string
}[
    [N] extends [never] // stops when nothing's left
    ? 1
    : string extends N
      ? 2
      : 0
]

/**
@hidden
*/
type MaxPositive<N extends Number, IMap extends Map> =
    _MaxPositive<N, IMap> extends infer X
    ? Cast<X, Iteration<IMap>>
    : never

/**
@hidden
*/
type _MaxNegative<N extends Number, IMap extends Map, I extends Iteration<IMap> = IterationOf<'0', IMap>> = {
    0: _MaxNegative<Exclude<N, Key<I, IMap>>, IMap, Prev<I, IMap>> // Find biggest -
    1: I
}[Or<Extends<Key<I, IMap>, N>, Extends<string, Key<I, IMap>>>] // stops as soon as it finds

/**
@hidden
*/
type MaxNegative<N extends Number, IMap extends Map> =
    _MaxNegative<N, IMap> extends infer X
    ? Cast<X, Iteration<IMap>>
    : never

/**
@hidden
*/
export type _Max<N extends Iteration<IMap>, IMap extends Map> =
    _IsNegative<N, IMap> extends 1 // breaks distribution
    ? MaxNegative<Key<N, IMap> & Numbers<IMap>['string']['-'], IMap>
    : MaxPositive<Key<N, IMap> & Numbers<IMap>['string']['+'], IMap>
    // Exclude (-) numbers, MinPositive only works with (+)

/**
Get the biggest [[Number]] within an [[Union]]
@param N [[Union]]
@param fmt (?=`'s'`) output format
@returns **`string | number | boolean`**
@example
```ts
import {N} from 'ts-toolbelt'

type test0 = N.Max<'-2' | '10' | '3'>      // '10'
type test1 = N.Max<'-2' | '10' | '3', 's'> // '10'
type test2 = N.Max<'-2' | '10' | '3', 'n'> //  10
type test3 = N.Min<'-2' | '10' | 'oops'>   // string
```
*/
export type Max<N extends Number, fmt extends Formats = 's', IMap extends Map = NumberMap> =
    Format<_Max<IterationOf<N, IMap>, IMap>, fmt, IMap>
