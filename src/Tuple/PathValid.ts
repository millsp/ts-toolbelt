import {PathValid as OPathValid} from '../Object/PathValid'

/** Validate a path of **`T`**. Invalid parts are replaced with `never`.
 * @param O to be inspected
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type PathValid<T extends any[], Path extends string[]> =
    OPathValid<T, Path>
