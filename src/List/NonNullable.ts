import {_Pick} from '../Object/Pick'
import {Key} from '../Any/Key'
import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Depth} from '../Object/_Internal'
import {BuiltInObject} from '../Misc/BuiltInObject'

/**
 * @hidden
 */
export type NonNullableFlat<O, K extends Key = Key> = {
    [P in keyof O]: P extends K
                    ? UNonNullable<O[P]>
                    : O[P]
} & {}

/**
 * @hidden
 */
type _NonNullableDeep<O> = {
    [K in keyof O]: O[K] extends BuiltInObject
                    ? O[K]
                    : NonNullableDeep<O[K], Key>
}

/**
 * @hidden
 */
export type NonNullableDeep<O, K extends Key = Key> =
    _NonNullableDeep<NonNullableFlat<O, K>>

/**
 * @hidden
 */
export type NonNullablePart<O extends object, K extends Key, depth extends Depth> = {
    'flat': NonNullableFlat<O, K>
    'deep': NonNullableDeep<O, K>
}[depth]

/**
Make some entries of `L` not nullable (deeply or not)
@param L to make non nullable
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type NonNullable<O extends object, K extends Key = Key, depth extends Depth = 'flat'> =
    NonNullablePart<O, K, depth>
