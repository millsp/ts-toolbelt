import {Replace} from '../Union/Replace'
import {x} from '../Any/x'
import {List} from './List'
import {Cast} from '../Any/Cast'
import {At} from '../Any/At'

/**
 * Modify `L` with `LMod` & the [[x]] placeholder
 * @param L to copy from
 * @param LMod to copy to
 * @returns [[List]]
 * @example
 * ```ts
 * import {A, L} from 'ts-toolbelt'
 *
 * type test0 = L.Modify<[string, number, boolean], [
 *  A.x | null,
 *  A.x | undefined,
 *  'enabled' | 'disabled'
 * ]>
 * // [string | null, number | undefined, 'enabled' | 'disabled']
 * ```
 */
export type Modify<L extends List, LMod extends List> = Cast<{
    [K in keyof LMod]: Replace<LMod[K], x, Exclude<At<L, K>, undefined>>
}, List>
