import {PathValid as OPathValid} from '../Object/PathValid'
import {Index} from '../Any/Index'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

/** Replaces invalid parts of a path with `never`
 * @param T to be inspected
 * @param Path to be validated
 * @returns **`string[]`**
 * @example
 * ```ts
 * ```
 */
export type PathValid<T extends Tuple, Path extends Tuple<Index>> =
    OPathValid<ObjectOf<T>, Path>
