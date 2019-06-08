import { IterationMap } from '../Iteration/IterationOf';
import { Exclude } from '../Union/Exclude';
import { SelectKeys } from '../Object/SelectKeys';
import { FormatMap } from '../Iteration/_Internal';
/** Describes what a valid **number** is
 */
export declare type Nbr = string;
/** Describes working versions of a **number**
 */
export declare type Numbers = {
    'string': {
        'all': IterationMap[Exclude<keyof IterationMap, '__'>][FormatMap['s']];
        '+': IterationMap[SelectKeys<IterationMap, [any, any, any, any, '+']>][FormatMap['s']];
        '-': IterationMap[SelectKeys<IterationMap, [any, any, any, any, '-']>][FormatMap['s']];
    };
    'number': {
        'all': IterationMap[Exclude<keyof IterationMap, '__'>][FormatMap['n']];
        '+': IterationMap[SelectKeys<IterationMap, [any, any, any, any, '+']>][FormatMap['n']];
        '-': IterationMap[SelectKeys<IterationMap, [any, any, any, any, '-']>][FormatMap['n']];
    };
};
