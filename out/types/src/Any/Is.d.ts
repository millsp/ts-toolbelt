import { Match } from './_Internal';
import { Extends } from './Extends';
import { Equals } from './Equals';
import { Or } from '../Boolean/Or';
import { Replace } from '../Union/Replace';
/** Check whether `A` is similar to `A1` or not
 * @param A to be compared
 * @param A1 to compare to
 * @param match to change precision (?=`'default'`)
 * @returns **`true`** or **`false`**
 * @example
 */
export declare type Is<A extends any, A1 extends any, match extends Match = 'default'> = {
    'extends': Extends<A, A1>;
    'equals': Equals<A, A1>;
    'loose': Or<Extends<A, A1>, Extends<A1, A>>;
}[Replace<match, 'default', 'extends'>];
