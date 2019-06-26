import {Equals} from '../Any/Equals'
import {Keys} from './Keys'

// Credit https://stackoverflow.com/a/52473108/3570903

/** Get the keys of **`O`** that are writable
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type WritableKeys<O extends object> = {
    [K in keyof O]-?: Equals<{-readonly [Q in K]: O[K]},
                             {          [Q in K]: O[K]},
                            'strict'> extends true
                      ? K
                      : never
}[Keys<O>]
