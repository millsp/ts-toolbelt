import { Merge } from './Merge';
import { NonNullable as UNonNullable } from '../Union/NonNullable';
import { Extends } from '../Any/Extends';
import { Pick } from './Pick';
import { Depth } from './_Internal';
import { Equals } from '../Any/Equals';
declare type ReadonlyFlat<O> = {
    +readonly [K in keyof O]: O[K];
};
declare type ReadonlyDeep<O> = {
    +readonly [K in keyof O]: Extends<UNonNullable<O[K]>, object> extends true ? ReadonlyDeep<O[K]> : O[K];
};
declare type ReadonlyPart<O extends object, depth extends Depth> = {
    'flat': ReadonlyFlat<O>;
    'deep': ReadonlyDeep<O>;
}[depth];
/** Make some fields of **`O`** readonly (deeply or not)
 * @param O to make readonly
 * @param K to choose fields (?=`keyof O`)
 * @param depth to do it deeply (?=`'default'`)
 * @returns **`object`**
 * @example
 */
export declare type Readonly<O extends object, K extends string = keyof O, depth extends Depth = 'flat'> = Equals<K, keyof O> extends true ? ReadonlyPart<O, depth> : Merge<ReadonlyPart<Pick<O, K>, depth>, O>;
export {};
