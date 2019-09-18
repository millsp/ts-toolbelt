import {Compute} from '../Any/Compute'
import {Keys} from './Keys'
import {Optional} from '../Object/Optional'
import {Record} from '../Object/Record'

type _Strict<U, _U = U> =
    U extends unknown
    ? U & Optional<Record<Exclude<Keys<_U>, keyof U>, never>>
    : never

/** Make a **union** not allow excess properties (https://github.com/Microsoft/TypeScript/issues/20863)
 * @param U to make strict
 * @returns **union**
 * @example
 * ```ts
 * ```
 */
export type Strict<U extends object> =
    Compute<_Strict<U>>
