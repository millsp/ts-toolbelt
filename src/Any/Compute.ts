import {Depth} from '../Object/_Internal'
import {Cast} from './Cast'

/** Force TS to load a type that has not been computed
 * (to resolve composed types that TS hasn't resolved)
 * @param A
 * @returns **`A`**
 * @example
 * ```ts
 * import {A} from 'ts-toolbelt'
 *
 * type test0 = A.Compute<{x: 'x'} & {y: 'y'}> // {x: 'x', y: 'y'}
 * ```
 */
export type Compute<A extends any> =
    {[K in keyof A]: A[K]} extends infer X
    ? X
    : never
