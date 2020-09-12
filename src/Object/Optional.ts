import {_Pick} from './Pick'
import {Depth} from './_Internal'
import {Key} from '../Any/Key'
import {_PatchFlat} from './Patch'
import {BuiltInObject} from '../Misc/BuiltInObject'

/**
@hidden
*/
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
} & {}

/**
@hidden
*/
export type OptionalDeep<O> = {
    [K in keyof O]?: O[K] extends BuiltInObject
                     ? O[K]
                     : OptionalDeep<O[K]>
}

/**
@hidden
*/
export type OptionalPart<O extends object, depth extends Depth> = {
    'flat': OptionalFlat<O>,
    'deep': OptionalDeep<O>,
}[depth]

/**
 * @hidden
 */
export type _Optional<O extends object, K extends Key, depth extends Depth> =
    _PatchFlat<OptionalPart<_Pick<O, K>, depth>, O, 2>

/**
Make some fields of `O` optional (deeply or not)
@param O to make optional
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Optional<O extends object, K extends Key = Key, depth extends Depth = 'flat'> =
    O extends unknown
    ? _Optional<O, K, depth>
    : never
