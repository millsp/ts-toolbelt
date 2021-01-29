import {Union} from './Union'

/**
 * Check whether `U` contains `U1`
 * @param U to be inspected
 * @param U1 to check within
 * @returns [[Boolean]]
 * @example
 * ```ts
 * ```
 */
export type Has<U extends Union, U1 extends Union> =
    [U1] extends [U]
    ? 1
    : 0
