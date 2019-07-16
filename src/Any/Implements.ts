import {False, True} from '../Boolean/Boolean'
import {Extends} from './Extends'

/** Check whether **`A1`** is part of **`A2`** or not
 * (works like **`Extends`** but with stricter results)
 * @param A1
 * @param A2
 * @returns **`Boolean`**
 * @example
 * ```ts
 * ```
 */
export type Implements<A1 extends any, A2 extends any> =
    Extends<A1, A2> extends True
    ? True
    : False
