import { Match } from '../Any/_Internal';
import { Is } from '../Any/Is';
import { At } from './At';
/** Check whether **`O`** has a field of key **`K`** that matches **`M`**
 * @param O to be inspected
 * @param K to choose field
 * @param M to check field type (?=`any`)
 * @param match to change precision (?=`'default'`)
 * @returns **`true`** or **`false`**
 * @example
 */
export declare type Has<O extends object, K extends string, M extends any = any, match extends Match = 'default'> = Is<At<O, K>, M, match>;
