import {Merge} from './Merge'
import {Nullable as UNullable} from '../Union/Nullable'
import {Depth} from './_Internal'
import {Pick} from './Pick'
import {Index} from '../Any/Index'
import {Implements} from '../Any/Implements'

/**
 * @hidden
 */
type NullableFlat<O> = {
    [K in keyof O]: UNullable<O[K]>
} & {}

/**
 * @hidden
 */
type NullableDeep<O> = {
    [K in keyof O]: NullableDeep<UNullable<O[K]>>
}

/**
 * @hidden
 */
type NullablePart<O extends object, depth extends Depth> = {
    'flat': NullableFlat<O>,
    'deep': NullableDeep<O>,
}[depth]

/** Make some fields of **`O`** nullable (deeply or not)
 * @param O to make nullable
 * @param (?=`keyof O`) K to choose fields * @param (?=`'flat'`) depth to do it deeply
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Nullable<O extends object, K extends Index = keyof O, depth extends Depth = 'flat'> = {
    1: NullablePart<O, depth>
    0: Merge<NullablePart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<keyof O, K>]
