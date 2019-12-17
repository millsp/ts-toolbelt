import {Merge} from './Merge'
import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Index} from '../Any/Index'
import {Implements} from '../Any/Implements'

/**
 * @hidden
 */
type ReadonlyFlat<O> = {
    +readonly [K in keyof O]: O[K]
} & {}

/**
 * @hidden
 */
type ReadonlyDeep<O> = {
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
 * @param (?=`keyof O`) K to choose fields * @param (?=`'default'`) depth to do it deeply * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Readonly<O extends object, K extends Index = keyof O, depth extends Depth = 'flat'> = {
    1: ReadonlyPart<O, depth>
    0: Merge<ReadonlyPart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<keyof O, K>]
