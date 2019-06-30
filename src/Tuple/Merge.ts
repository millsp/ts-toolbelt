import {Longest} from './Longest'
import {Length} from './Length'
import {Concat} from './Concat'
import {Drop} from './Drop'
// import {Max} from '../Number/Max'

/** Complete the entries of **`T`** with the ones of **`T1`**
 * @param T to complete
 * @param T1 to copy from
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Merge<T extends any[], T1 extends any[]> =
    T1 extends Longest<T, T1>
    ? Concat<T, Drop<T1, Length<T, 's'>>>
    : T
