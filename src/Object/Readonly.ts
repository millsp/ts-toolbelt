import {MergeFlat} from './Merge'
import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Key} from '../Any/Key'
import {Implements} from '../Any/Implements'
import {Keys} from '../Union/Keys'

/**
 * @hidden
 */
export type ReadonlyFlat<O> = {
    +readonly [K in keyof O]: O[K]
} & {}

/**
 * @hidden
 */
export type ReadonlyDeep<O> = {
    +readonly [K in keyof O]: ReadonlyDeep<O[K]>
}

/**
 * @hidden
 */
type ReadonlyPart<O extends object, depth extends Depth> = {
    'flat': ReadonlyFlat<O>,
    'deep': ReadonlyDeep<O>,
}[depth]

/** Make some fields of **`O`** readonly (deeply or not)
 * @param O to make readonly
 * @param (?=`any`) K to choose fields * @param (?=`'default'`) depth to do it deeply
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Readonly<O extends object, K extends Key = any, depth extends Depth = 'flat'> = {
    1: ReadonlyPart<O, depth>
    0: MergeFlat<ReadonlyPart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<Keys<O>, K>]
