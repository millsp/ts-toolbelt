import {_Pick} from '../Object/Pick'
import {Key} from '../Any/Key'
import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Depth} from '../Object/_Internal'

/**
 * @hidden
 */
export type NonNullableFlat<O extends object, K extends Key> = {
    [P in keyof O]: P extends K
                    ? UNonNullable<O[P]>
                    : O[P]
} & {}

/**
 * @hidden
 */
type __NonNullableDeep<O> = {
    [P in keyof O]: UNonNullable<O[P]> extends infer X
                    ? X extends object
                      ? __NonNullableDeep<X>
                      : X
                    : never
}

/**
 * @hidden
 */
type _NonNullableDeep<O extends object, K extends Key, OU = NonNullable<O, K>> = {
    [K in keyof OU]: __NonNullableDeep<OU[K]>
} & {}

/**
 * @hidden
 */
export type NonNullableDeep<O extends object, K extends Key> =
    _NonNullableDeep<O, K>

/**
 * @hidden
 */
export type NonNullablePart<O extends object, K extends Key, depth extends Depth> = {
    'flat': NonNullableFlat<O, K>
    'deep': NonNullableDeep<O, K>
}[depth]

/**
Make some entries of **`L`** not nullable (deeply or not)
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
