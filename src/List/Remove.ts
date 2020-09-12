import {Number} from '../Number/Number'
import {KeySet} from './KeySet'
import {Omit} from './Omit'
import {List} from './List'

/**
Remove out of `L` a range of entries
@param L to remove from
@param From to start from
@param To to end with
@returns [[List]]
@example
```ts
```
*/
export type Remove<L extends List, From extends Number, To extends Number> =
    Omit<L, KeySet<From, To>>
