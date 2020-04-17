import {Key} from '../Any/Key'
import {AtLeast as OAtLeast} from '../Object/AtLeast'
import {ObjectOf} from './ObjectOf'
import {_ListOf} from '../Object/ListOf'
import {List} from './List'
import {NumberOf} from '../Any/_Internal'
import {Keys} from './Keys'

/**
Split **`L`** into a [[Union]] with **`K`** keys in such a way that none of
Make that at least one of the keys **`K`** are required in **`O`** at a time.
@param O to make required
@param K (?=`keyof O`) to choose fields
@returns [[List]] [[Union]]
@example
```ts
```
*/
export type AtLeast<L extends List, K extends Key = Keys<L>> =
    OAtLeast<ObjectOf<L>, NumberOf<K>> extends infer OE
    ? OE extends unknown
      ? _ListOf<OE & {}>
      : never
    : never
