import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Merge} from './Merge'
import {Equals} from '../Any/Equals'

type WritableFlat<O> = {
    -readonly [K in keyof O]: O[K]
}

type WritableDeep<O> = {
    -readonly [K in keyof O]: WritableDeep<O[K]>
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
    Equals<K, keyof O> extends true
    ? WritablePart<O, depth> // Merge is not necessary
    : Merge<WritablePart<Pick<O, K>, depth>, O>
