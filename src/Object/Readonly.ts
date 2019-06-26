import {Merge} from './Merge'
import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Equals} from '../Any/Equals'

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
export type Readonly<O extends object, K extends string = keyof O, depth extends Depth = 'flat'> =
    Equals<K, keyof O> extends true
    ? ReadonlyPart<O, depth> // Merge is not necessary
    : Merge<ReadonlyPart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K), make it nullable, and merge it back into O
