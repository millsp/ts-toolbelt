import {Union} from './Union'

/**
Get the intersection of `U1` & `U2`
@param U1 to check similarities with
@param U2 to check similarities against
@returns [[Union]]
@example
```ts
```
*/
export type Intersect<U1 extends Union, U2 extends Union> =
    U1 & U2
