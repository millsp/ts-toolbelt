import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Merge} from './Merge'
import {Index} from '../Any/Index'
import {Implements} from '../Any/Implements'

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
 * ```ts
 * ```
 */
export type Writable<O extends object, K extends Index = keyof O, depth extends Depth = 'flat'> = {
    1: WritablePart<O, depth>
    0: Merge<WritablePart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<keyof O, K>]
