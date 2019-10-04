import {Omit} from './Omit'
import {At} from './At'
import {Exclude} from '../Union/Exclude'
import {Numbers} from '../Number/_Internal'

/** Ensure that **`O`** is a proper **`object`**, even is it has been mixed up.
 * Sometimes, we can end up with mixed up **`objects`** that do not make sense
 * visually (or that could at least be simplified for the end user). This will
 * turn anything that is passed to it into a cleaned up **`object`**.
 *
 * If **`O`** has been mixed up with a **Tuple**, then only its own keys will be
 * kept. However, if it's only an **`Array`** or a mix of it, we restore it. And
 * **`object`**s that were mixed with **`Array`**s cannot be untangled.
 * @param O
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Ensure<O extends object> =
    number extends At<O, 'length'>                                                    // if it's an array
    ? [Exclude<keyof O, keyof any[] | Numbers['string']['+' | '0']>] extends [never]  //  if it's not mixed
      ? At<O, number>[]                                                               //    restore it
      : O                                                                             //    do nothing
    : Omit<O, keyof any[]>                                                            // ensure is object
