import {Cast} from '../Any/Cast'
import {HasPath} from './HasPath'
import {Extract} from '../Tuple/_api'

/** Validate a path of **`O`**. Invalid parts are replaced with `never`.
 * @param O to be inspected
 * @param Path to be validated
 * @returns **`string[]`**
 * @example
 * ```ts
 * ```
 */
export type PathValid<O extends object, Path extends string[]> = {
    [K in keyof Path]: HasPath<O, Extract<Path, '0', K>> extends true
                       ? Path[K]
                       : never
} extends infer X
? Cast<X, string[]>
: never
