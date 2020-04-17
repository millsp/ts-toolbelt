import {Key} from '../Any/Key'
import {AtLeast as OAtLeast} from '../Object/AtLeast'
import {ObjectOf} from './ObjectOf'
import {_ListOf} from '../Object/ListOf'
import {List} from './List'
import {Boolean} from '../Boolean/Boolean'
import {NumberOf} from '../Any/_Internal'
import {Keys} from './Keys'

/**
Split **`L`** into a [[Union]] with **`K`** keys in such a way that none of
the keys are ever present with one another within the different unions.
@param L to split
@param K to split with
@param strict (?=`1`) to force excess property checks https://github.com/microsoft/TypeScript/issues/20863
@returns [[Union]]
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
