import {Depth} from '../Object/_Internal'
import {NonNullable as ONonNullable} from '../Object/NonNullable'
import {ListOf} from '../Object/ListOf'
import {Cast} from '../Any/Cast'
import {Key} from '../Any/Key'
import {ObjectOf} from './ObjectOf'
import {Contains} from '../Any/Contains'
import {Keys} from './Keys'
import {List} from './List'
import {NumberOf} from '../Any/_Internal'

/**
Make some entries of **`L`** not nullable (deeply or not)
@param L to make non nullable
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type NonNullable<L extends List, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: Cast<ONonNullable<L, Key, depth>, List>
    0: ListOf<ONonNullable<ObjectOf<L>, NumberOf<K>, depth>>
}[Contains<Keys<L>, K>] & {}
