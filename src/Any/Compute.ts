import {Depth} from '../Object/_Internal'
import {BuiltInObject} from '../Misc/_api'
import {Cast} from './Cast'

/**
 * @hidden
 */
type _ComputeFlat<A extends any> =
    A extends BuiltInObject
    ? A
    : {
        [K in keyof A]: A[K]
      } & {}

/**
 * @hidden
 */
export type ComputeFlat<A extends any> =
    _ComputeFlat<A> extends infer X
    ? Cast<X, A>
    : never

/**
 * @hidden
 */
type _ComputeDeep<A extends any, Seen extends any = A> =
    A extends BuiltInObject
    ? A
    : {
        [K in keyof A]: A[K] extends Seen                 // `Seen` handles circular type refs
                        ? A[K]                            // we've seen this type, don't compute
                        : _ComputeDeep<A[K], A[K] | Seen> // 1st time seeing this, save & compute
      } & {}

/**
 * @hidden
 */
export type ComputeDeep<A extends any> =
      _ComputeDeep<A> extends infer X
      ? Cast<X, A>
      : never

/**
 * Force TS to load a type that has not been computed (to resolve composed
 * types that TS haven't fully resolved, for display purposes mostly).
 * @param A to compute
 * @returns **`A`**
 * @example
 * ```ts
 * import {A} from 'ts-toolbelt'
 *
 * type test0 = A.Compute<{x: 'x'} & {y: 'y'}> // {x: 'x', y: 'y'}
 * ```
 */
export type Compute<A extends any, depth extends Depth = 'deep'> = {
    'flat': ComputeFlat<A>
    'deep': ComputeDeep<A>
}[depth]
