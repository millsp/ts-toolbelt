import {Merge} from './Merge'
import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Index} from '../Any/Index'
import {Implements} from '../Any/Implements'

type ReadonlyFlat<O> = {
    +readonly [K in keyof O]: O[K]
}

type ReadonlyDeep<O> = {
    +readonly [K in keyof O]: ReadonlyDeep<O[K]>
}

type ReadonlyPart<O extends object, depth extends Depth> = {
    'flat': ReadonlyFlat<O>,
    'deep': ReadonlyDeep<O>,
}[depth]

/** Make some fields of **`O`** readonly (deeply or not)
 * @param O to make readonly
 * @param K to choose fields (?=`keyof O`)
 * @param depth to do it deeply (?=`'default'`)
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Readonly<O extends object, K extends Index = keyof O, depth extends Depth = 'flat'> = {
    1: ReadonlyPart<O, depth>
    0: Merge<ReadonlyPart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<keyof O, K>]
