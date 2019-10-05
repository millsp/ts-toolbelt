import {IterationMap} from '../Iteration/IterationOf'
import {Format} from '../Iteration/Format'

/** Describes compatible type formats
 * * `b`: **`boolean`**
 * * `n`: **`number`**
 * * `s`: **`string`**
 */
export type Formats = 'b' | 'n' | 's'

// import {Exclude} from '../Union/Exclude'
// import {SelectKeys} from '../Object/SelectKeys'
// type KnownIterationMapKeys = Exclude<keyof IterationMap, '__'>
// type PositiveIterationKeys = SelectKeys<IterationMap, [any, any, any, any, '+']>
// type NegativeIterationKeys = SelectKeys<IterationMap, [any, any, any, any, '-']>

type KnownIterationMapKeys = '-40' | '-39' | '-38' | '-37' | '-36' | '-35' | '-34' | '-33' | '-32' | '-31' | '-30' | '-29' | '-28' | '-27' | '-26' | '-25' | '-24' | '-23' | '-22' | '-21' | '-20' | '-19' | '-18' | '-17' | '-16' | '-15' | '-14' | '-13' | '-12' | '-11' | '-10' | '-9' | '-8' | '-7' | '-6' | '-5' | '-4' | '-3' | '-2' | '-1' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40'
type PositiveIterationKeys = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40'
type NegativeIterationKeys = '-40' | '-39' | '-38' | '-37' | '-36' | '-35' | '-34' | '-33' | '-32' | '-31' | '-30' | '-29' | '-28' | '-27' | '-26' | '-25' | '-24' | '-23' | '-22' | '-21' | '-20' | '-19' | '-18' | '-17' | '-16' | '-15' | '-14' | '-13' | '-12' | '-11' | '-10' | '-9' | '-8' | '-7' | '-6' | '-5' | '-4' | '-3' | '-2' | '-1'

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
        'all': Format<IterationMap[KnownIterationMapKeys], 'n'> // union of all number
        '+'  : Format<IterationMap[PositiveIterationKeys], 'n'> // union of +   number
        '-'  : Format<IterationMap[NegativeIterationKeys], 'n'> // union of -   number
        '0'  : Format<IterationMap['0'], 'n'>
    }
}
