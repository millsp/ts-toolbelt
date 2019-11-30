import {Omit} from './Omit'
import {At} from './At'
import {Exclude} from '../Union/Exclude'
import {Numbers} from '../Number/_Internal'
import {HasAll} from '../Union/HasAll'

/** Ensure that **`O`** is a proper **`object`**, even is it has been mixed up.
 * Sometimes, we can end up with mixed up **`objects`** that do not make sense
 * visually (or that could at least be simplified for the end user). This will
 * turn anything that is passed to it into a cleaned up **`object`**.
 *
 * @param O
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Clean<O extends object> =
    number extends At<O, 'length'>                                                    // if it's an array
    ? [Exclude<keyof O, keyof any[] | Numbers['string']['+' | '0']>] extends [never]  //  if it's not mixed
      ? At<O, number>[]                                                               //    restore it
      : O                                                                             //    do nothing
    : HasAll<keyof O, keyof any[]> extends 1                                          // if `O` is really an array
      ? Omit<O, keyof any[]>                                                          // (^it checks all its keys)
      : O
