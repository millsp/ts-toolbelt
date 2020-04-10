import {Format} from '../Iteration/Format'
import {Map} from '../Misc/Iteration/Map'
import {NumberMap} from '../Misc/Iteration/Number'

/**
Describes compatible type formats
* `b`: **`boolean`**
* `n`: **`number`**
* `s`: **`string`**
*/
export type Formats = 'b' | 'n' | 's'

/**
 * @hidden
 */
export type KnownIterationMapKeys<IMap extends Map> = IMap['keys'][0] | '0' | IMap['keys'][1]

/**
 * @hidden
 */
export type NegativeIterationKeys<IMap extends Map> = IMap['keys'][0]

/**
 * @hidden
 */
export type PositiveIterationKeys<IMap extends Map> = IMap['keys'][1]

/**
Describes known values of a **number**
@hidden
*/
export type Numbers<IMap extends Map = NumberMap> = {
    'string': {
        'all': Format<IMap[KnownIterationMapKeys<IMap>], 's'> // union of all string
        '+'  : Format<IMap[PositiveIterationKeys<IMap>], 's'> // union of +   string
        '-'  : Format<IMap[NegativeIterationKeys<IMap>], 's'> // union of -   string
        '0'  : Format<IMap['0'], 's'>
    }
    'number': {
        'all': Format<IMap[KnownIterationMapKeys<IMap>], 'n'> // union of all number
        '+'  : Format<IMap[PositiveIterationKeys<IMap>], 'n'> // union of +   number
        '-'  : Format<IMap[NegativeIterationKeys<IMap>], 'n'> // union of -   number
        '0'  : Format<IMap['0'], 'n'>
    }
}
