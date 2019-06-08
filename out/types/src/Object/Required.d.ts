import { Merge } from './Merge';
import { NonNullable as UNonNullable } from '../Union/NonNullable';
import { Extends } from '../Any/Extends';
import { Pick } from './Pick';
import { Depth } from './_Internal';
import { Equals } from '../Any/Equals';
declare type RequiredFlat<O> = {
    [K in keyof O]-?: O[K];
};
declare type RequiredDeep<O> = {
    [K in keyof O]-?: Extends<UNonNullable<O[K]>, object> extends true ? RequiredDeep<O[K]> : O[K];
};
declare type RequiredPart<O extends object, depth extends Depth> = {
    'flat': RequiredFlat<O>;
    'deep': RequiredDeep<O>;
}[depth];
/** Make some fields of **`O`** required (deeply or not)
 * @param O to make required
 * @param K to choose fields (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 */
export declare type Required<O extends object, K extends string = keyof O, depth extends Depth = 'flat'> = Equals<K, keyof O> extends true ? RequiredPart<O, depth> : Merge<RequiredPart<Pick<O, K>, depth>, O>;
export {};
