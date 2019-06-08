import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Extends} from '../Any/Extends'
import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Merge} from './Merge'

type WritableFlat<O> = {
    -readonly [K in keyof O]: O[K]
}

type WritableDeep<O> = {
    -readonly [K in keyof O]: Extends<UNonNullable<O[K]>, object> extends true // Remove null & undefined
                              ? WritableDeep<O[K]>                             // To check if its an object
                              : O[K]                                           // Or return a -readonly
}

type WritablePart<O extends object, depth extends Depth> = {
    'flat': WritableFlat<O>,
    'deep': WritableDeep<O>,
}[depth]

/** Make some fields of **`O`** writable (deeply or not)
 * @param O to make writable
 * @param K to choose fields (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 */
export type Writable<O extends object, K extends string = keyof O, depth extends Depth = 'flat'> =
    Merge<WritablePart<Pick<O, K>, depth>, O>
