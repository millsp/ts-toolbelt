import {Promise} from '../Any/Promise'

/**
 * A way to say that you can handle `Promises` and non-`Promises`. This
 * is often the case if you're a heavy user of `await` and `async`.
 * @param A Any type
 * @returns `A | Promise<A>`
 * @example
 * ```ts
 * import {A} from 'ts-toolbelt'
 *
 * declare function generateRandomNumber(): A.Promisable<number>
 *
 * const res0 = await generateRandomNumber()
 * const res1 = await generateRandomNumber()
 *
 * console.log(res0 < res1)
 * ```
 */
export type Promisable<A extends any> =
    A | Promise<A>
