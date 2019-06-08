import { Merge } from './Merge';
import { NonNullable as UNonNullable } from '../Union/NonNullable';
import { Extends } from '../Any/Extends';
import { Depth } from './_Internal';
import { Pick } from './Pick';
import { Equals } from '../Any/Equals';
declare type NonNullableFlat<O> = {
    [K in keyof O]: UNonNullable<O[K]>;
};
declare type NonNullableDeep<O> = {
    [K in keyof O]: Extends<UNonNullable<O[K]>, object> extends true ? NonNullableDeep<O[K]> : UNonNullable<O[K]>;
};
declare type NonNullablePart<O extends object, depth extends Depth> = {
    'flat': NonNullableFlat<O>;
    'deep': NonNullableDeep<O>;
}[depth];
/** Make some fields of **`O`** not nullable (deeply or not)
 * (Optional fields will be left untouched & **`undefined`**)
 * @param O to make non nullable
 * @param K to choose fields (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 */
export declare type NonNullable<O extends object, K extends string = keyof O, depth extends Depth = 'flat'> = Equals<K, keyof O> extends true ? NonNullablePart<O, depth> : Merge<NonNullablePart<Pick<O, K>, depth>, O>;
export {};
