import {KeySet} from './KeySet'
import {Number} from '../Number/Number'
import {Pick} from './Pick'
import {List} from './List'

/**
Pick a range of entries (portion) from `L`
@param L to pick from
@param From to start with
@param To to end with
@returns [[List]]
@example
```ts
```
*/
export type Extract<L extends List, From extends Number, To extends Number> =
    Pick<L, KeySet<From, To>>
