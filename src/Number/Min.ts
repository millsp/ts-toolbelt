import {Number} from './Number'
import {Formats} from '../Iteration/_Internal'
import {NumberMap} from '../Iteration/Maps/Number'
import {Map} from '../Iteration/Map'
import {Negate} from './Negate'
import {Max} from './Max'

/**
Get the smallest [[Number]] within an [[Union]]
@param N [[Union]]
@param fmt (?=`'s'`) output format
@param IMap to operate with another set of numbers
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
    Negate<Max<Negate<N, 's', IMap>, 's', IMap>, fmt, IMap>
