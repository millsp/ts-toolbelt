import {OptionalPart} from './Optional'
import {Depth} from './_Internal'

/**
Make all fields of **`O`** optional (deeply or not)
@param O to make optional
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
import {O} from 'ts-toolbelt'

O.Partial<MyType>
O.Partial<MyType, 'deep'>
```
 */
export type Partial<O extends object, depth extends Depth = 'flat'> =
    OptionalPart<O, depth>
