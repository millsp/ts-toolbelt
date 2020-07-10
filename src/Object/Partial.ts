import {OptionalPart} from './Optional'
import {Depth} from './_Internal'

/**
Make a type's fields optional. Choose to do it deeply or not.
@param O the type to make its fields optional
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
import { O } from 'ts-toolbelt'

O.Partial<MyType>
O.Partial<MyType, 'deep'>
```
 */
export type Partial<O extends object, depth extends Depth = 'flat'> = OptionalPart<O, depth>
