import {MergeFlat} from './Merge'
import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Key} from '../Any/Key'
import {Implements} from '../Any/Implements'
import {Keys} from './Keys'

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
    [K in keyof O]?: OptionalDeep<O[K]>
}

/**
@hidden
*/
type OptionalPart<O extends object, depth extends Depth> = {
    'flat': OptionalFlat<O>,
    'deep': OptionalDeep<O>,
}[depth]

/**
Make some fields of **`O`** optional (deeply or not)
@param O to make optional
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Optional<O extends object, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: OptionalPart<O, depth>
    0: MergeFlat<OptionalPart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<Keys<O>, K>] & {}

/**
Partial is an alias for Optional with a simpler syntax. Just like the native `Partial` it makes a type's fields optional, but accepts one extra param to choose between 'flat' or 'deep'.
@param O the type to make its fields optional
@param depth (?=`'flat'`) to do it deep
@returns [[Object]]
@example Partial<MyType>
@example Partial<MyType, 'deep'>
 */
export type Partial<O extends object, depth extends Depth = 'flat'> = {
  flat: OptionalFlat<O>
  deep: OptionalDeep<O>
}[depth]
