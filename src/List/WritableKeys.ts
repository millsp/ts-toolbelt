import {WritableKeys as OWritableKeys} from '../Object/WritableKeys'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/**
Get the keys of **`O`** that are writable
@param O
@returns [[Key]]
@example
```ts
```
*/
export type WritableKeys<L extends List> =
    OWritableKeys<ObjectOf<L>>
