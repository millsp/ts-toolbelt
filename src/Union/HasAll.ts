import {True, False} from '../Boolean/Boolean'

/** Check whether **`U`** contains the whole union **`U1`**
 * @param U to be inspected
 * @param U1 to check within
 * @returns [[Boolean]]
 * @example
 * ```ts
 * ```
 */
export type HasAll<U extends any, U1 extends any> =
    [Exclude<U1, U & U1>] extends [never]
    ? True
    : False
