import {IterationOf} from '../Iteration/IterationOf'
import {KnownIterationMapKeys} from './_Internal'
import {Number} from './Number'
import {Formats} from '../Iteration/_Internal'
import {Format} from '../Iteration/Format'
import {NumberMap} from '../Iteration/Maps/Number'
import {Map} from '../Iteration/Map'
import {Equals} from '../Any/Equals'

/**
 * @hidden
 */
type UnionizeCumulatedNumberUnions<N extends Number, IMap extends Map = NumberMap> = {
    [K in keyof IMap[1]]: K extends N
                          ? IMap[1][K][5] // cumulative union from maps are used as masks
                          : never         // the higher we go the higher the cumulated is
}[KnownIterationMapKeys<IMap>]            // see Maps for examples in col `5`

/**
 * @hidden
 */
type FindMaxNumberInUnion<N extends Number, IMap extends Map = NumberMap> =
    UnionizeCumulatedNumberUnions<N, IMap> extends infer Match
    ? {   // the biggest number will have the biggest cumulated union
          [K in keyof IMap[1]]: Equals<IMap[1][K][5], Match> extends 1
                                ? K // we return the key of this biggest
                                : never
      }[KnownIterationMapKeys<IMap>] // this will return 1 entry only
    : never

/**
Get the biggest [[Number]] within an [[Union]]
@param N [[Union]]
@param fmt (?=`'s'`) output format
@param IMap to operate with another set of numbers
@returns `string | number | boolean`
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
    Format<IterationOf<FindMaxNumberInUnion<N, IMap>, IMap>, fmt>

