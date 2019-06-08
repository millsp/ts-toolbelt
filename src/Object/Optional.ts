import {Merge} from './Merge'
import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Extends} from '../Any/Extends'
import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Equals} from '../Any/Equals'

type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
}

type OptionalDeep<O> = {
  [K in keyof O]?: Extends<UNonNullable<O[K]>, object> extends true // Remove null & undefined
                   ? OptionalDeep<O[K]>                             // To check if its an object
                   : O[K]                                           // Or return an optional
}

type OptionalPart<O extends object, depth extends Depth> = {
    'flat': OptionalFlat<O>,
    'deep': OptionalDeep<O>,
}[depth]

/** Make some fields of **`O`** optional (deeply or not)
 * @param O to make optional
 * @param K to choose fields (?=`keyof O`)
 * @param depth to do it deeply (?=`'default'`)
 * @returns **`object`**
 * @example
 */
export type Optional<O extends object, K extends string = keyof O, depth extends Depth = 'flat'> =
    Equals<K, keyof O> extends true
    ? OptionalPart<O, depth> // Merge is not necessary
    : Merge<OptionalPart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K), make it optional and merge it back into O
