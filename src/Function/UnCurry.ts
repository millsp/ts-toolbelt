import {Curry} from './Curry'

// Does not work, used to
/** Undoes the work that was done by **`Curry`**
 * @param F to uncurry
 * @returns **`Function`**
 * @example
 */
export type UnCurry<F extends Curry<any>> =
    F extends Curry<infer UF>
    ? UF
    : never
