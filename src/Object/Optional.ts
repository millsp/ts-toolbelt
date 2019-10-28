import {Merge} from './Merge'
import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Index} from '../Any/Index'
import {Implements} from '../Any/Implements'

type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
} & {}

type OptionalDeep<O> = {
    [K in keyof O]?: OptionalDeep<O[K]>
} & {}

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
 * ```ts
 * ```
 */
export type Optional<O extends object, K extends Index = keyof O, depth extends Depth = 'flat'> = {
    1: OptionalPart<O, depth>
    0: Merge<OptionalPart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<keyof O, K>]
