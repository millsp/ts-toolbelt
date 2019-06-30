import {Keys} from './Keys'
import {Equals} from '../Any/Equals'
import {True} from '../Boolean/Boolean'

// Credit https://stackoverflow.com/a/52473108/3570903

/** Get the keys of **`O`** that are readonly
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type ReadonlyKeys<O extends object> = {
    [K in keyof O]-?: Equals<{-readonly [Q in K]: O[K]},
                             {          [Q in K]: O[K]},
                            'strict'> extends True
                      ? never
                      : K
}[Keys<O>]
