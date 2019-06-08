import { ReadonlyKeys as OReadonlyKeys } from '../Object/ReadonlyKeys';
import { List } from '../_Internal';
/** Get the keys of **`T`** that are readonly
 * @param T
 * @returns **`keyof`**
 * @example
 */
export declare type ReadonlyKeys<T extends List> = OReadonlyKeys<T>;
