import {Exclude} from '../Union/Exclude'
import {List} from './List'
import {Keys} from './Keys'

/**
Get the shortest [[List]] of `L` & `L1`
(`L` has priority if both lengths are equal)
@param L to compare length
@param L1 to compare length
@returns `L | L1`
@example
```ts
```
*/
export type Shortest<L extends List, L1 extends List> =
    [Exclude<Keys<L>, Keys<L1>>] extends [never]
    ? L
    : L1
