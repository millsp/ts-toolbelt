/**
Transform a **`boolean`** into a [[Boolean]]
@param B to transform
@returns [[Boolean]]
@example
```ts
type test0 = B.BooleanOf<true>  // 1
type test1 = B.BooleanOf<false> // 0
```
*/
export type BooleanOf<B extends boolean> =
    B extends true
    ? 1
    : 0
