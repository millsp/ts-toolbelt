import {IterationMap} from '../Iteration/IterationOf'
import {Exclude} from '../Union/Exclude'
import {SelectKeys} from '../Object/SelectKeys'
import {FormatMap} from '../Iteration/_Internal'

/** Describes what a valid **number** is
 */
export type Nbr = string

/** Describes working versions of a **number**
 */
export type Numbers = {
    'string': {
        'all': IterationMap[Exclude<keyof IterationMap, '__'>][FormatMap['s']]                   // union of all string
        '+'  : IterationMap[SelectKeys<IterationMap, [any, any, any, any, '+']>][FormatMap['s']] // union of +   string
        '-'  : IterationMap[SelectKeys<IterationMap, [any, any, any, any, '-']>][FormatMap['s']] // union of -   string
    }
    'number': {
        'all': IterationMap[Exclude<keyof IterationMap, '__'>][FormatMap['n']]                   // union of all number
        '+'  : IterationMap[SelectKeys<IterationMap, [any, any, any, any, '+']>][FormatMap['n']] // union of +   number
        '-'  : IterationMap[SelectKeys<IterationMap, [any, any, any, any, '-']>][FormatMap['n']] // union of -   number
    }
}
