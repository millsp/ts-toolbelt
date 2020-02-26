import {_Omit} from '../Object/Omit'
import {_Pick} from '../Object/Pick'
import {At} from '../Object/At'
import {Exclude} from '../Union/Exclude'
import {Numbers} from '../Number/_Internal'
import {_ListOf} from '../Object/ListOf'
import {Has} from '../Union/Has'

/**
 * @hidden
 */
type ArrayEntry = Numbers['string']['0' | '+'] // tuple entries become literal if mixed with objects

/**
 * @hidden
 */
type ArrayProps = keyof any[] | ArrayEntry     // so this matches any entry, whether is mixed or not

/**
 * Sometimes, we can end up with mixed up **`objects`** that do not make sense
 * visually (or that could at least be simplified for the end user). This will
 * turn anything that is passed to it into a cleaned up [[Object]].
 *
 * @param O
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type Clean<A extends any> =
    A extends object
    ? Has<keyof A, keyof any[]> extends 1                          // if it is mixed with, or is an array
      ? [Exclude<keyof A, ArrayProps>] extends [never]             //   if it is an array, or a tuple
        ? number extends At<A, 'length'>                           //     if it is an array
          ? At<A, number>[]                                        //       reform array
          : A                                                      //       it's a tuple
        : number extends At<A, 'length'>                           //   else, if it's mixed with
          ? _Omit<A, ArrayProps> & At<A, number>[]                 //     untangle array
          : At<A, 'length'> extends number                         //   else, if it's a mixed tuple
            ? _Omit<A, ArrayProps> & _ListOf<_Pick<A, ArrayEntry>> //     untangle tuple
            : A                                                    //     cannot clean it
      : A                                                          // it has not been mixed
    : A
