import {_Concat} from './Concat'
import {List} from './List'

/**
@hidden
*/
export type _Append<L extends List, A extends any> =
    _Concat<L, [A]>

/**
Add an element **`A`** at the end of **`L`**
@param L to append to
@param A to be added to
@returns [[List]]
@example
```ts
```
*/
export type Append<L extends List, A extends any> =
    L extends unknown
    ? A extends unknown
      ? _Append<L, A>
      : never
    : never
