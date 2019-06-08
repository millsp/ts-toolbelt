import { Match } from '../Any/_Internal';
import { SelectKeys as OSelectKeys } from '../Object/SelectKeys';
import { List } from '../_Internal';
/** Get the keys of **`T`** which entries match **`M`**
 * @param T to extract from
 * @param M to select entries
 * @param match to change precision (?=`'default'`)
 * @returns **`keyof`**
 * @example
 */
export declare type SelectKeys<T extends List, M extends any, match extends Match = 'default'> = OSelectKeys<T, M, match>;
