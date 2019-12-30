import {_Omit} from './Omit'
import {List} from './List'
import {LastIndex} from './LastIndex'
import {Naked} from './_Internal'

/**
@hidden
*/
export type _Pop<L extends List> =
    _Omit<L, LastIndex<Naked<L>, 's'>>

/**
Remove the last element out of **`L`**
@param L to remove from
@returns [[List]]
@example
```ts
```
*/
export type Pop<L extends List> =
    L extends unknown
    ? _Pop<L>
    : never
