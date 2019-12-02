import {Omit} from '../Object/Omit'
import {Pick} from '../Object/Pick'
import {At} from '../Object/At'
import {Exclude} from '../Union/Exclude'
import {Numbers} from '../Number/_Internal'
import {TupleOf} from '../Object/TupleOf'
import {True} from '../Boolean/Boolean'
import {HasAll} from '../Union/HasAll'

type ArrayEntry = Numbers['string']['0' | '+'] // tuple entries become literal if mixed with objects
type ArrayProps = keyof any[] | ArrayEntry     // so this matches any entry, whether is mixed or not

/** Sometimes, we can end up with mixed up **`objects`** that do not make sense
 * visually (or that could at least be simplified for the end user). This will
 * turn anything that is passed to it into a cleaned up **`object`**.
 *
 * @param O
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Clean<A extends any> =
    A extends object
    ? HasAll<keyof A, keyof any[]> extends True                // if it is mixed with, or is an array
      ? [Exclude<keyof A, ArrayProps>] extends [never]         //   if it is an array, or a tuple
        ? number extends At<A, 'length'>                       //     if it is an array
          ? At<A, number>[]                                    //       reform array
          : A                                                  //       it's a tuple
        : number extends At<A, 'length'>                       //   otherwise, it's mixed with
          ? Omit<A, ArrayProps> & At<A, number>[]              //     untangle array
          : Omit<A, ArrayProps> & TupleOf<Pick<A, ArrayEntry>> //     untangle tuple
      : A                                                      // it has not been mixed
    : A
