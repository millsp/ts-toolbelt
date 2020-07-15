import {_Omit} from '../Object/Omit'
import {At} from '../Object/At'
import {List} from './List'
import {Exclude} from '../Union/Exclude'

/**
@hidden
*/
export type _ObjectOf<L extends List> =
    number extends At<L, 'length'>           // ^^^ handles mixed up objs
    ? _Omit<L, Exclude<keyof any[], number>> // preserves arrays
    : _Omit<L, keyof any[]>                  // transforms tuples

/**
Transform a [[List]] into an [[Object]] equivalent
@param L to transform
@returns [[Object]]
@example
```ts
```
*/
export type ObjectOf<L extends List> =
    L extends unknown
    ? _ObjectOf<L>
    : never
