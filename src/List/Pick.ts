import {_Pick as _OPick} from '../Object/Pick'
import {_ListOf} from '../Object/ListOf'
import {Key} from '../Any/Key'
import {_ObjectOf} from './ObjectOf'
import {List} from './List'
import {NumberOf} from '../Any/_Internal'

/**
@hidden
*/
export type _Pick<L extends List, K extends Key> =
    _ListOf<_OPick<_ObjectOf<L>, NumberOf<K>>>

/**
Extract out of **`L`** the entries of key **`K`**
@param L to extract from
@param K to chose entries
@returns [[List]]
@example
```ts
```
*/
export type Pick<L extends List, K extends Key> =
    L extends unknown
    ? _Pick<L, K>
    : never
