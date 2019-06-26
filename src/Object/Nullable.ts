import {Merge} from './Merge'
import {Nullable as UNullable} from '../Union/Nullable'
import {Depth} from './_Internal'
import {Pick} from './Pick'
import {Equals} from '../Any/Equals'

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
export type Nullable<O extends object, K extends string = keyof O, depth extends Depth = 'flat'> =
    Equals<K, keyof O> extends true
    ? NullablePart<O, depth> // Merge is not necessary
    : Merge<NullablePart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K), make it nullable, and merge it back into O
