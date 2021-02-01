import {Match} from '../Any/_Internal'
import {Is} from '../Any/Is'

/**
 * Remove `M` out of `U`
 * @param U to remove from
 * @param M to remove out
 * @returns [[Union]]
 * @example
 * ```ts
 * ```
 */
export type Filter<U extends any, M extends any, match extends Match = 'default'> =
    U extends unknown
    ? Is<U, M, match> extends 1
      ? never
      : U & M
    : never
