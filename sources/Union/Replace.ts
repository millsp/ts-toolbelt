import {Is} from '../Any/Is'
import {Match} from '../Any/_Internal'

/**
 * Replace `M` with `A` in `U`
 * @param U to update
 * @param M to select
 * @param A to update with
 * @returns [[Union]]
 * @example
 * ```ts
 * ```
 */
export type Replace<U extends any, M extends any, A extends any, match extends Match = 'default'> =
    U extends unknown
    ? Is<U, M, match> extends 1
      ? A
      : U
    : never
