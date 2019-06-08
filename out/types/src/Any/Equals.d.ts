import { Replace } from '../Union/Replace';
import { Match } from './_Internal';
declare type EqualsDefault<A1 extends any, A2 extends any> = (A1 | A2) extends A1 ? (A1 | A2) extends A2 ? true : false : false;
declare type EqualsStrict<A1 extends any, A2 extends any> = (<A>() => A extends A1 ? 1 : 2) extends (<A>() => A extends A2 ? 1 : 2) ? true : false;
/** Check whether **`A1`** is equal to **`A2`** or not
 * @param A1
 * @param A2
 * @param match to change precision
 * @returns **`true`** or **`false`**
 * @example
 */
export declare type Equals<A1 extends any, A2 extends any, match extends Match = 'default'> = {
    'default': EqualsDefault<A1, A2>;
    'equals': EqualsStrict<A1, A2>;
}[Replace<match, 'extends' | 'loose', 'default'>];
export {};
