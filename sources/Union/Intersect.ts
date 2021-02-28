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
    U2 extends unknown
    ? Select<U1, U2, 'equals'>
    : never
