/**
 * Check whether **`A1`** is part of **`A2`** or not. The difference with
 * `extends` is that it forces a [[Boolean]] return.
 * @param A1
 * @param A2
 * @returns [[Boolean]]
 * @example
 * ```ts
 * import {A} from 'ts-toolbelt'
 *
 * type test0 = A.Extends<'a' | 'b', 'b'> // Boolean
 * type test1 = A.Extends<'a', 'a' | 'b'> // True
 *
 * type test2 = A.Extends<{a: string}, {a: any}>      // True
 * type test3 = A.Extends<{a: any}, {a: any, b: any}> // False
 *
 * type test4 = A.Extends<never, never> // False
 * /// Nothing cannot extend nothing, use `A.Equals`
 * ```
 */
export type Extends<A1 extends any, A2 extends any> =
    [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0

// Comes from the fact that `never` is a fall-through type that we want to
// narrow down to `0`. So it means that `Extends<never, any>` is false
