import {Concat} from '../Tuple/Concat'

/** Get the path of **`O`**.
 * @param O to be inspected
 * @returns **`string[]`**
 * @example
 * ```ts
 * ```
 */
export type PathOf<T> = _PathOf<T, []>

type _PathOf<T, P extends any[]> = (P['length'] extends 0 ? never : P) | {
  [K in keyof T]: keyof T[K] extends never ? Concat<P, [K]> : _PathOf<T[K], Concat<P, [K]>>
}[keyof T]
