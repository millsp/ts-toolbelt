import {Merge} from './Merge'
import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Depth} from './_Internal'
import {Pick} from './Pick'
import {Equals} from '../Any/Equals'

type NonNullableFlat<O> = {
    [K in keyof O]: UNonNullable<O[K]>
}

type NonNullableDeep<O> = {
    [K in keyof O]: NonNullableDeep<UNonNullable<O[K]>>
}

type NonNullablePart<O extends object, depth extends Depth> = {
    'flat': NonNullableFlat<O>,
    'deep': NonNullableDeep<O>,
}[depth]

/** Make some fields of **`O`** not nullable (deeply or not)
 * (Optional fields will be left untouched & **`undefined`**)
 * @param O to make non nullable
 * @param K to choose fields (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 */
export type NonNullable<O extends object, K extends string = keyof O, depth extends Depth = 'flat'> =
    Equals<K, keyof O> extends true
    ? NonNullablePart<O, depth> // Merge is not necessary
    : Merge<NonNullablePart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K), make it non-nullable, and merge it back into O
