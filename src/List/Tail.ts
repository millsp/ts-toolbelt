import {List} from './List'

/**
Remove the first item out of a [[List]]
@param L
@returns [[List]]
@example
```ts
```
*/
export type Tail<L extends List> =
    L extends readonly [any, ...infer LTail]
    ? LTail
    : L
