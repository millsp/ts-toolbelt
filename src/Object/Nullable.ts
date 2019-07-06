import {Merge} from './Merge'
import {Nullable as UNullable} from '../Union/Nullable'
import {Depth} from './_Internal'
import {Pick} from './Pick'
import {Equals} from '../Any/Equals'
import {Index} from '../_Internal'

type NullableFlat<O> = {
    [K in keyof O]: UNullable<O[K]>
}

type NullableDeep<O> = {
    [K in keyof O]: NullableDeep<UNullable<O[K]>>
}

type NullablePart<O extends object, depth extends Depth> = {
    'flat': NullableFlat<O>,
    'deep': NullableDeep<O>,
}[depth]

/** Make some fields of **`O`** nullable (deeply or not)
 * @param O to make nullable
 * @param K to choose fields (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Nullable<O extends object, K extends Index = keyof O, depth extends Depth = 'flat'> = {
    1: NullablePart<O, depth>
    0: Merge<NullablePart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Equals<K, keyof O>]
