import {Function} from './Function'
import {Parameters} from './Parameters'
import {Return} from './Return'

/** Creates a promisified version of a **Function**
 * types that TS haven't resolved).
 * @param F to promisify
 * @returns promisified F
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * type test0 = F.Promisify<(a: number) => number> // (a: number) => Promise<number>
 * ```
 */
export type Promisify<F extends Function> = (...args: Parameters<F>) => Promise<Return<F>>
