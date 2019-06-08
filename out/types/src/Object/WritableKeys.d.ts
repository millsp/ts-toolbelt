import { Equals } from '../Any/Equals';
import { Keys } from './Keys';
/** Get the keys of **`O`** that are writable
 * @param O
 * @returns **`keyof`**
 * @example
 */
export declare type WritableKeys<O extends object> = {
    [K in keyof O]-?: Equals<{
        -readonly [Q in K]: O[K];
    }, {
        [Q in K]: O[K];
    }, 'equals'> extends true ? K : never;
}[Keys<O>];
