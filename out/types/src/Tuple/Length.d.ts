import { Min } from '../Number/Min';
import { Max } from '../Number/Max';
import { StringOf } from '../Number/StringOf';
import { Format } from '../Iteration/_Internal';
import { Cast } from '../Any/Cast';
import { Limit } from './_Internal';
import { List } from '../_Internal';
declare type Reg<N extends number, fmt extends Format> = {
    's': StringOf<N>;
    'n': N;
}[fmt];
/** Get the length of **`T`**
 * @param T to get length
 * @param fmt output (?=`'n'`)
 * @param limit to count (or not) optionals (?=`'reg'`)
 * @returns **`string`** or **`number`**
 * @example
 */
export declare type Length<T extends List, fmt extends Format = 'n', limit extends Limit = 'reg'> = {
    'min': Min<StringOf<T['length']>, fmt>;
    'max': Max<StringOf<T['length']>, fmt>;
    'reg': Reg<T['length'], fmt>;
}[limit] extends infer X ? Cast<X, {
    s: string;
    n: number;
}[fmt]> : never;
export {};
