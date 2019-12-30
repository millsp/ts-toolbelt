import {Exclude} from '../Union/Exclude'
import {List} from './List'
import {Keys as UKeys} from '../Union/Keys'

/**
Get the keys of a [[List]]
@param L
@returns [[Key]]
@example
```ts
```
*/
export type Keys<L extends List> =
    Exclude<UKeys<L>, keyof any[]> | number
    // re-include `number`, it's a "own key"
