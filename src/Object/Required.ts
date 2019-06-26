import {Merge} from './Merge'
import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Equals} from '../Any/Equals'

type RequiredFlat<O> = {
    [K in keyof O]-?: O[K]
}

type RequiredDeep<O> = {
  [K in keyof O]-?: RequiredDeep<O[K]>
}

type RequiredPart<O extends object, depth extends Depth> = {
    'flat': RequiredFlat<O>,
    'deep': RequiredDeep<O>,
}[depth]

/** Make some fields of **`O`** required (deeply or not)
 * @param O to make required
 * @param K to choose fields (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Required<O extends object, K extends string = keyof O, depth extends Depth = 'flat'> =
    Equals<K, keyof O> extends true
    ? RequiredPart<O, depth> // Merge is not necessary
    : Merge<RequiredPart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K), make it optional and merge it back into O

