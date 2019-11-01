import {Merge} from './Merge'
import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Index} from '../Any/Index'
import {Implements} from '../Any/Implements'
import {NonNullable} from '../Union/NonNullable'

/**
 * @internal
 */
type CompulsoryFlat<O> = {
    [K in keyof O]-?: NonNullable<O[K]>
} & {}

/**
 * @internal
 */
type CompulsoryDeep<O> = {
    [K in keyof O]-?: CompulsoryDeep<NonNullable<O[K]>>
} & {}

/**
 * @internal
 */
type CompulsoryPart<O extends object, depth extends Depth> = {
    'flat': CompulsoryFlat<O>,
    'deep': CompulsoryDeep<O>,
}[depth]

/** Make some fields of **`O`** compulsory (deeply or not)
 * (it's like **`Required`** & **`NonNullable`** at once).
 * @param O to make compulsory
 * @param K to choose fields (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Compulsory<O extends object, K extends Index = keyof O, depth extends Depth = 'flat'> = {
    1: CompulsoryPart<O, depth>
    0: Merge<CompulsoryPart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<keyof O, K>]
