import {NonNullable} from '../Object/NonNullable'

/**
A [[Tuple]] (supported)
@param A its type
@returns [[List]]
@example
```ts
type tuple0 = [1, 20, 42]
type tuple1 = ['at', 420]
```
*/
export type Tuple<A = any> = NonNullable<[
    A?, A?, A?, A?, A?, A?, A?, A?, A?, A?,
    A?, A?, A?, A?, A?, A?, A?, A?, A?, A?,
    A?, A?, A?, A?, A?, A?, A?, A?, A?, A?,
    A?, A?, A?, A?, A?, A?, A?, A?, A?, A?,
]>
