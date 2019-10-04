import {Omit} from './Omit'
import {At} from '../Object/At'
import {Exclude} from '../Union/Exclude'
import {Numbers} from '../Number/_Internal'
import {Merge} from '../Object/Merge'

/** Ensure that **`T`** is a proper **`Tuple`**, even is it has been mixed up.
 * Sometimes, we can end up with mixed up **`Tuple`**s that do not make sense
 * visually (or that could at least be simplified for the end user). This will
 * turn anything that is passed to it into a cleaned up **`Tuple`**.
 *
 * If **`T`** has been mixed up with an **`object`**, then only its own keys
 * will be kept. However, if it's only an **`Array`** or a mix of it, we restore
 * it. And **`object`**s that were mixed with **`Array`**s cannot be untangled.
 * @param O
 * @returns **`object | Tuple`**
 * @example
 * ```ts
 * ```
 */
export type Ensure<T extends object> =
    number extends At<T, 'length'>                                                    // if it's an array
    ? [Exclude<keyof T, keyof any[] | Numbers['string']['+' | '0']>] extends [never]  //  if it's not mixed
      ? At<T, number>[]                                                               //    restore it
      : T                                                                             //    do nothing
    : Omit<T & [], keyof any[]>                                                            // ensure is object


type t = Ensure<Merge<string[], {a: string}>>
