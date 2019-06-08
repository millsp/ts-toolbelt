import { MergeKeys as OMergeKeys } from '../Object/MergeKeys';
import { Cast } from '../Any/Cast';
import { List } from '../_Internal';
/** Get the keys of **`T` & `T1`**
 * @param T
 * @param T1
 * @returns **`keyof`**
 * @example
 */
export declare type MergeKeys<T extends List, T1 extends List> = OMergeKeys<T, T1> extends infer X ? Cast<X, keyof (T & T1)> : never;
