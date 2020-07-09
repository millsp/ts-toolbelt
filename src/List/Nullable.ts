import {Key} from '../Any/Key'
import {Cast} from '../Any/Cast'
import {Contains} from '../Any/Contains'
import {Depth} from '../Object/_Internal'
import {Nullable as ONullable} from '../Object/Nullable'
import {ListOf} from '../Object/ListOf'
import {ObjectOf} from './ObjectOf'
import {List} from './List'
import {Keys} from './Keys'
import {NumberOf} from '../Any/_Internal'

/**
Make some entries of **`L`** nullable (deeply or not)
@param L to make nullable
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Nullable<L extends List, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: Cast<ONullable<L, Key, depth>, List>
    0: ListOf<ONullable<ObjectOf<L>, NumberOf<K>, depth>>
}[Contains<Keys<L>, K>] & {}
