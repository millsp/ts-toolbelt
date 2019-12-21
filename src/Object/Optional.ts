import {Merge} from './Merge'
import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Key} from '../Any/Key'
import {Implements} from '../Any/Implements'
import {Keys} from './Keys'

/**
 * @hidden
 */
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
} & {}

/**
 * @hidden
 */
export type OptionalDeep<O> = {
    [K in keyof O]?: OptionalDeep<O[K]>
}

/**
 * @hidden
 */
type OptionalPart<O extends object, depth extends Depth> = {
    'flat': OptionalFlat<O>,
    'deep': OptionalDeep<O>,
}[depth]

/** Make some fields of **`O`** optional (deeply or not)
 * @param O to make optional
 * @param (?=`any`) K to choose fields * @param (?=`'default'`) depth to do it deeply
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Optional<O extends object, K extends Key = any, depth extends Depth = 'flat'> = {
    1: OptionalPart<O, depth>
    0: Merge<OptionalPart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<Keys<O>, K>]
