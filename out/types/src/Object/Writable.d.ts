import { NonNullable as UNonNullable } from '../Union/NonNullable';
import { Extends } from '../Any/Extends';
import { Pick } from './Pick';
import { Depth } from './_Internal';
import { Merge } from './Merge';
declare type WritableFlat<O> = {
    -readonly [K in keyof O]: O[K];
};
declare type WritableDeep<O> = {
    -readonly [K in keyof O]: Extends<UNonNullable<O[K]>, object> extends true ? WritableDeep<O[K]> : O[K];
};
declare type WritablePart<O extends object, depth extends Depth> = {
    'flat': WritableFlat<O>;
    'deep': WritableDeep<O>;
}[depth];
/** Make some fields of **`O`** writable (deeply or not)
 * @param O to make writable
 * @param K to choose fields (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 */
export declare type Writable<O extends object, K extends string = keyof O, depth extends Depth = 'flat'> = Merge<WritablePart<Pick<O, K>, depth>, O>;
export {};
