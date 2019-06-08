import { OptionalKeys as OOptionalKeys } from '../Object/OptionalKeys';
import { List } from '../_Internal';
/** Get the keys of **`T`** that are optional
 * @param T
 * @returns **`keyof`**
 * @example
 */
export declare type OptionalKeys<T extends List> = OOptionalKeys<T>;
