import { Tail } from './Tail';
import { Length } from './Length';
import { List } from '../_Internal';
import { Limit } from './_Internal';
/** Get the last entry of **`T`**
 * @param T to extract from
 * @param limit to count (or not) optionals (?=`'reg'`)
 * @returns **`any`**
 * @example
 */
export declare type Last<T extends List, limit extends Limit = 'reg'> = T[Length<Tail<T>, 'n', limit>];
