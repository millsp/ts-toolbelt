import {Cast} from '../Any/Cast'
import {Narrowable} from './_Internal'

/**
 * Basic type helper
 * @hidden
 */
type NarrowRaw<A> =
| []
| (A extends Narrowable ? A : never)
| ({[K in keyof A]: NarrowRaw<A[K]>})

/**
 * Enforce proper variance
 * @hidden
 */
type NarrowVar<A, N = NarrowRaw<A>> =
    N | Cast<A, N>

/**
 * Prevent type widening on generic function parameters
 * @param A to narrow
 * @returns `A`
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * declare function foo<A extends any[]>(x: F.Narrow<A>): A;
 * declare function bar<A extends object>(x: F.Narrow<A>): A;
 *
 * const test0 = foo(['e', 2, true, {f: ['g', ['h']]}])
 * // `A` inferred : ['e', 2, true, {f: ['g']}]
 *
 * const test1 = bar({a: 1, b: 'c', d: ['e', 2, true, {f: ['g']}]})
 * // `A` inferred : {a: 1, b: 'c', d: ['e', 2, true, {f: ['g']}]}
 * ```
 */
type Narrow<A extends any> =
    NarrowVar<A>

export {Narrow}
