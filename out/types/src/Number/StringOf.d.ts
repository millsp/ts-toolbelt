import { IterationMap } from '../Iteration/IterationOf';
import { SelectKeys } from '../Object/SelectKeys';
import { Numbers } from './_Internal';
import { FormatMap } from '../Iteration/_Internal';
/** Transform a**number**into a **`string`**
 * @param N to stringify
 * @returns **`string`**
 * @example
 */
export declare type StringOf<N extends number> = N extends Numbers['number']['all'] ? IterationMap[SelectKeys<IterationMap, [any, any, any, N, any]>][FormatMap['s']] : string;
