import {PathValid as OPathValid} from '../Object/PathValid'

/** Replaces invalid parts of a path with `never`
 * @param T to be inspected
 * @param Path to be validated
 * @returns **`string[]`**
 * @example
 * ```ts
 * ```
 */
export type PathValid<T extends any[], Path extends string[]> =
    OPathValid<T, Path>
