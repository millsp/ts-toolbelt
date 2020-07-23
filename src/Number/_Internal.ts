import {Format} from '../Iteration/Format'
import {Map} from '../Iteration/Map'
import {NumberMap} from '../Iteration/Maps/Number'

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
export type KnownIterationMapKeys<IMap extends Map> =
    IMap[0]['-' | '0' | '+']

/**
 * @hidden
 */
export type NegativeIterationKeys<IMap extends Map> =
    IMap[0]['-']

/**
 * @hidden
 */
export type PositiveIterationKeys<IMap extends Map> =
    IMap[0]['+']

/**
 * @hidden
 */
export type NeutralIterationKeys<IMap extends Map> =
    IMap[0]['0']

/**
Describes known values of a **number**
@hidden
*/
export type Numbers<IMap extends Map = NumberMap> = {
    'string': {
        'all': Format<IMap[1][KnownIterationMapKeys<IMap>], 's'> // union of all string
        '+'  : Format<IMap[1][PositiveIterationKeys<IMap>], 's'> // union of +   string
        '-'  : Format<IMap[1][NegativeIterationKeys<IMap>], 's'> // union of -   string
        '0'  : Format<IMap[1][NeutralIterationKeys<IMap>], 's'>
    }
    'number': {
        'all': Format<IMap[1][KnownIterationMapKeys<IMap>], 'n'> // union of all number
        '+'  : Format<IMap[1][PositiveIterationKeys<IMap>], 'n'> // union of +   number
        '-'  : Format<IMap[1][NegativeIterationKeys<IMap>], 'n'> // union of -   number
        '0'  : Format<IMap[1][NeutralIterationKeys<IMap>], 'n'>
    }
}
