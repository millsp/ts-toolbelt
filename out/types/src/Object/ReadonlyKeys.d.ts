import { Keys } from './Keys';
import { Equals } from '../Any/Equals';
/** Get the keys of **`O`** that are readonly
 * @param O
 * @returns **`keyof`**
 * @example
 */
export declare type ReadonlyKeys<O extends object> = {
    [K in keyof O]-?: Equals<{
        -readonly [Q in K]: O[K];
    }, {
        [Q in K]: O[K];
    }, 'equals'> extends true ? never : K;
}[Keys<O>];
