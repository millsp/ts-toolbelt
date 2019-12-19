import {Pick as OPick} from '../Object/Pick'
import {Pick as LPick} from '../List/Pick'
import {Index} from '../Any/Index'
import {List} from '../List/List'

/** Extract out from each member of union **`U`** the fields of key **`K`**
 * @param U to remove from
 * @param K to chose fields
 * @returns **union**
 * @example
 * ```ts
 * import {U} from 'ts-toolbelt'
 *
 * type O = {type: 'foo'; other: number} | {type: 'bar'; other: string} | [0, 1]
 * type test0 = U.Pick<O, 'type' | '1'> // {type: 'foo'} | {type: 'bar'} | [1]
 * ```
 */
export type Pick<U extends object, K extends Index> =
    U extends unknown
    ? U extends List
      ? LPick<U, K>
      : OPick<U, K>
    : never
