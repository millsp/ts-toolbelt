import {NumberOf} from '../Number/NumberOf'
import {Formats} from '../Iteration/_Internal'
import {List} from './List'

/**
Get the length of **`L`**
@param L to get length
@param fmt (?=`'n'`) output format
@returns [[String]] or **`number`**
@example
```ts
```
*/
export type Length<L extends List, fmt extends Formats = 'n'> =  {
    's': NumberOf<L['length']>
    'n': L['length']
}[fmt]
