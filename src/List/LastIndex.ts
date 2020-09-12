import {Length} from './Length'
import {Formats} from '../Iteration/_Internal'
import {Tail} from './Tail'
import {List} from './List'

/**
Get the last index of `L`
@param L to get from
@param fmt (?=`'n'`) output format
@returns [[String]] or `number`
@example
```ts
```
*/
export type LastIndex<L extends List, fmt extends Formats = 'n'> =
    Length<Tail<L>, fmt>
