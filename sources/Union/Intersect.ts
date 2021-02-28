import {Equals} from '../Any/_api'
import type {Select} from './Select'

/**
 * Get the overlapping members of `U1` and `U2`
 * @param U1
 * @param U2
 * @returns [[Union]]
 * @example
 * ```ts
 * ```
 */
export type Intersect<U1 extends any, U2 extends any> =
    U1 extends unknown
    ? U2 extends unknown
      ? {1: U1, 0: never}[Equals<U1, U2>]
      : never
    : never
