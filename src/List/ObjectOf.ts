import {_Omit} from '../Object/Omit'
import {_Pick} from '../Object/Pick'
import {At} from '../Object/At'

/**
@hidden
*/
export type _ObjectOf<L extends object> =
    number extends At<L, 'length'> // ^^^ handles mixed up objs
    ? _Pick<L, number>             // preserves arrays
    : _Omit<L, keyof any[]>        // transforms tuples

/**
Transform a [[List]] into an [[Object]] equivalent
@param L to transform
@returns [[Object]]
@example
```ts
```
*/
export type ObjectOf<L extends object> =
    L extends unknown
    ? _ObjectOf<L>
    : never
