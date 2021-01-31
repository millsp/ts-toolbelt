import {Depth} from '../Object/_Internal'
import {BuiltIn} from '../Misc/BuiltIn'

/**
 * @hidden
 */
export type ComputeRaw<A extends any> =
    A extends Function
    ? A
    : {[K in keyof A]: A[K]} & unknown

/**
 * @hidden
 */
type ComputeFlat<A extends any> =
    A extends BuiltIn
    ? A
    : A extends Array<any>
      ? A extends Array<Record<string | number | symbol, any>>
        ? Array<{[K in keyof A[number]]: A[number][K]} & unknown>
        : A
      : A extends ReadonlyArray<any>
        ? A extends ReadonlyArray<Record<string | number | symbol, any>>
          ? ReadonlyArray<{[K in keyof A[number]]: A[number][K]} & unknown>
          : A
        : {[K in keyof A]: A[K]} & unknown;

/**
 * @hidden
 */
type ComputeDeep<A extends any> =
    A extends BuiltIn
    ? A
    : A extends Array<any>
      ? A extends Array<Record<string | number | symbol, any>>
        ? Array<{[K in keyof A[number]]: ComputeDeep<A[number][K]>} & unknown>
        : A
    : A extends ReadonlyArray<any>
      ? A extends ReadonlyArray<Record<string | number | symbol, any>>
        ? ReadonlyArray<{[K in keyof A[number]]: ComputeDeep<A[number][K]>} & unknown>
        : A
      : {[K in keyof A]: ComputeDeep<A[K]>} & unknown;

/**
 * Force TS to load a type that has not been computed (to resolve composed
 * types that TS haven't fully resolved, for display purposes mostly).
 * @param A to compute
 * @returns `A`
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
