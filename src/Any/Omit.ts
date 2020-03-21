import {_Omit as _OOmit} from '../Object/Omit'
import {_Omit as _LOmit} from '../List/Omit'
import {Key} from './Key'
import {List} from '../List/List'
import {Union} from '../Union/Union'

/**
 * Remove out from each member of union **`U`** the fields of key **`K`**
 * @param U to remove from
 * @param K to chose fields
 * @returns [[Union]]
 * @example
 * ```ts
 * import {U} from 'ts-toolbelt'
 *
 * type O = {type: 'foo'; other: number} | {type: 'bar'; other: string} | [0, 1]
 * type test0 = U.Omit<O, 'other' | '0'> // {type: 'foo'} | {type: 'bar'} | [1]
 * ```
 */
export type Omit<U extends Union, K extends Key> =
    U extends object
    ? U extends List
      ? _LOmit<U, K>
      : _OOmit<U, K>
    : U
