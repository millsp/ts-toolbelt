import {PathValid as OPathValid} from '../Object/PathValid'

/** Get from **`O`** all the possible paths
 * @param O to be inspected
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type PathValid<T extends any[], Path extends string[]> =
    OPathValid<T, Path>
