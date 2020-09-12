import {Key} from '../Any/Key'
import {AtLeast as OAtLeast} from '../Object/AtLeast'
import {ObjectOf} from './ObjectOf'
import {_ListOf} from '../Object/ListOf'
import {List} from './List'
import {NumberOf} from '../Any/_Internal'
import {Keys} from './Keys'

/**
Make that at least one of the keys `K` are required in `L` at a time.
@param L to make required
@param K (?=`keyof L`) to choose fields
@returns [[List]] [[Union]]
@example
```ts
```
*/
export type AtLeast<L extends List, K extends Key = Keys<L>> =
    OAtLeast<ObjectOf<L>, NumberOf<K>> extends infer U
    ? U extends unknown // we distribute over the union
      ? _ListOf<U & {}> // each union member to a list
      : never
    : never
