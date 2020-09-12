import {Compulsory as OCompulsory} from '../Object/Compulsory'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/**
Get the keys of `L` that are [[Compulsory]]

(⚠️ needs `--strictNullChecks` enabled)
@param L
@returns [[Key]]
@example
```ts
```
*/
export type CompulsoryKeys<L extends List> =
    OCompulsory<ObjectOf<L>>
