import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Prepend} from '../List/Prepend'
import {Prev} from '../Iteration/Prev'
import {Next} from '../Iteration/Next'
import {Number} from './Number'
import {Cast} from '../Any/Cast'
import {Formats} from '../Iteration/_Internal'
import {Way} from '../Iteration/_Internal'
import {Format} from '../Iteration/Format'
import {List} from '../List/List'
import {Extends} from '../Any/Extends'
import {NumberMap} from '../Iteration/Maps/Number'
import {Map} from '../Iteration/Map'

/**
@hidden
*/
type RangeForth<From extends Iteration, To extends Iteration, IMap extends Map, fmt extends Formats, L extends List = []> = {
    0: RangeForth<Prev<From, IMap>, To, IMap, fmt, Prepend<L, Format<From, fmt>>>
    1: L
}[Extends<From, To>]

/**
@hidden
*/
type RangeBack<From extends Iteration, To extends Iteration, IMap extends Map, fmt extends Formats, L extends List = []> = {
    0: RangeBack<Next<From, IMap>, To, IMap, fmt, Prepend<L, Format<From, fmt>>>
    1: L
}[Extends<From, To>]

/**
@hidden
*/
type __Range<From extends Iteration, To extends Iteration, way extends Way, fmt extends Formats, IMap extends Map> = {
    '->': RangeForth<To, Prev<From, IMap>, IMap, fmt> // Reverse logic to work naturally #`Prepend`
    '<-': RangeBack<From, Next<To, IMap>, IMap, fmt>  // Works in reverse mode (default) #`Prepend`
}[way]

/**
@hidden
*/
export type _Range<From extends Number, To extends Number, way extends Way = '->', fmt extends Formats = 's', IMap extends Map = NumberMap> =
    __Range<IterationOf<From, IMap>, IterationOf<To, IMap>, way, fmt, IMap> extends infer X
    ? Cast<X, (string | number)[]>
    : never

/**
Create a range of **number**s
@param From to start with
@param To to end with
@param way (?=`'->'`) to reverse it
@param fmt (?=`'s'`) output format
@param IMap to operate with another set of numbers
@returns **`string[] | number[] | boolean[]`**
@example
```ts
import {N} from 'ts-toolbelt'

type test0 = N.Range<'-2', '1'>            // ['-2', '-1', '0', '1']
type test1 = N.Range<'-2', '1', '->'>      // ['-2', '-1', '0', '1']
type test2 = N.Range<'-2', '1', '<-'>      // ['1', '0', '-1', '-2']
type test3 = N.Range<'-2', '1', '<-', 's'> // ['1', '0', '-1', '-2']
type test4 = N.Range<'-2', '1', '->', 'n'> // [-2 , -1 ,   0 ,   1 ]
```
*/
export type Range<From extends Number, To extends Number, way extends Way = '->', fmt extends Formats = 's', IMap extends Map = NumberMap> =
    From extends unknown
    ? To extends unknown
      ? _Range<From, To, way, fmt, IMap>
      : never
    : never
