import {IterationMap} from '../Iteration/IterationOf'
import {Exclude} from '../Union/Exclude'
import {SelectKeys} from '../Object/SelectKeys'
import {Format} from '../Iteration/Format'

/** Describes compatible type formats
 * * `s`: **`string`**
 * * `n`: **`number`**
 * * `b`: **`boolean`**
 */
export type Formats = 'b' | 'n'

type KnownIterationMapKeys = Exclude<keyof IterationMap, '__'>
type PositiveIterationKeys = SelectKeys<IterationMap, [any, any, any, any, '+']>
type NegativeIterationKeys = SelectKeys<IterationMap, [any, any, any, any, '-']>

/** Describes known values of a **number**
 */
export type Numbers = {
    'string': {
        'all': Format<IterationMap[KnownIterationMapKeys], 's'> // union of all string
        '+'  : Format<IterationMap[PositiveIterationKeys], 's'> // union of +   string
        '-'  : Format<IterationMap[NegativeIterationKeys], 's'> // union of -   string
        '0'  : Format<IterationMap['0'], 's'>
    }
    'number': {
        'all': Format<IterationMap[KnownIterationMapKeys], 'n'> // union of all string
        '+'  : Format<IterationMap[PositiveIterationKeys], 'n'> // union of +   string
        '-'  : Format<IterationMap[NegativeIterationKeys], 'n'> // union of -   string
        '0'  : Format<IterationMap['0'], 'n'>
    }
}
