import {Omit} from './Omit'
import {At} from '../Object/At'
import {Exclude} from '../Union/Exclude'
import {Numbers} from '../Number/_Internal'

/** Ensure that **`T`** is a proper **`Tuple`**, even is it has been mixed up.
 * Sometimes, we can end up with mixed up **`Tuple`**s that do not make sense
 * visually (or that could at least be simplified for the end user). This will
 * turn anything that is passed to it into a cleaned up **`Tuple`**.
 *
 * @param O
 * @returns **`object | Tuple`**
 * @example
 * ```ts
 * ```
 */
export type Clean<T extends object> =
    number extends At<T, 'length'>                                                    // if it's an array
    ? [Exclude<keyof T, keyof any[] | Numbers['string']['+' | '0']>] extends [never]  //  if it's not mixed
      ? At<T, number>[]                                                               //    restore it
      : T                                                                             //    do nothing
    : Omit<T & [], keyof any[]>                                                       // ensure is object


type t = Clean<string[] & [1]>
