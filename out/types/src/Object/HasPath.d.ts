import { Match } from '../Any/_Internal';
import { Path as OPath } from './Path';
import { Is } from '../Any/Is';
/** Check whether **`O`** has nested properties that match **`M`**
 * @param O to be inspected
 * @param Path to be followed
 * @param M (?=`any`) to check field type
 * @param match (?=`'default'`) to change precision
 * @returns **`true`** or **`false`**
 * @example
 */
export declare type HasPath<O extends object, Path extends string[], M extends any = any, match extends Match = 'default'> = Is<OPath<O, Path>, M, match>;
