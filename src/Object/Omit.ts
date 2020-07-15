import {_Pick} from './Pick'
import {Exclude} from '../Union/Exclude'
import {Key} from '../Any/Key'
import {Keys} from './Keys'

/**
 * @hidden
 */
export type _Omit<O extends object, K extends Key> =
    _Pick<O, Exclude<Keys<O>, K>>

/**
Remove out of **`O`** the fields of key **`K`**
@param O to remove from
@param K to chose fields
@returns [[Object]]
@example
```ts
```
*/
export type Omit<O extends object, K extends Key> =
    O extends unknown
    ? _Omit<O, K>
    : never
