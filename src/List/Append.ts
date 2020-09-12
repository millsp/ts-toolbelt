import {List} from './List'

/**
Add an element `A` at the end of `L`
@param L to append to
@param A to be added to
@returns [[List]]
@example
```ts
```
*/
export type Append<L extends List, A extends any> =
    [...L, A]
