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
    [K in keyof O]-?: {
        1: K
        0: never
    }[Equals<{-readonly [Q in K]: O[K]}, {[Q in K]: O[K]}>]
}[Keys<O>]
