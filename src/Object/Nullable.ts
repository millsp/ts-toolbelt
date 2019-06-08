import {Merge} from './Merge'
import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Extends} from '../Any/Extends'
import {Depth} from './_Internal'
import {Pick} from './Pick'
import {Equals} from '../Any/Equals'

type NullableFlat<O> = {
    [K in keyof O]: O[K] | undefined
}

type NullableDeep<O> = {
    [K in keyof O]: Extends<UNonNullable<O[K]>, object> extends true // Remove null & undefined
                    ? NullableDeep<O[K]>                             // To check if its an object
                    : O[K] | undefined                               // Or return a nullable
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
 */
export type Nullable<O extends object, K extends string = keyof O, depth extends Depth = 'flat'> =
    Equals<K, keyof O> extends true
    ? NullablePart<O, depth> // Merge is not necessary
    : Merge<NullablePart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K), make it nullable, and merge it back into O
