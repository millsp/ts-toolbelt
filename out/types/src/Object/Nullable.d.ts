import { Merge } from './Merge';
import { NonNullable as UNonNullable } from '../Union/NonNullable';
import { Extends } from '../Any/Extends';
import { Depth } from './_Internal';
import { Pick } from './Pick';
import { Equals } from '../Any/Equals';
declare type NullableFlat<O> = {
    [K in keyof O]: O[K] | undefined;
};
declare type NullableDeep<O> = {
    [K in keyof O]: Extends<UNonNullable<O[K]>, object> extends true ? NullableDeep<O[K]> : O[K] | undefined;
};
declare type NullablePart<O extends object, depth extends Depth> = {
    'flat': NullableFlat<O>;
    'deep': NullableDeep<O>;
}[depth];
/** Make some fields of **`O`** nullable (deeply or not)
 * @param O to make nullable
 * @param K to choose fields (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 */
export declare type Nullable<O extends object, K extends string = keyof O, depth extends Depth = 'flat'> = Equals<K, keyof O> extends true ? NullablePart<O, depth> : Merge<NullablePart<Pick<O, K>, depth>, O>;
export {};
