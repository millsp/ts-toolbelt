/**
 * Similar to [[Cast]] but with a custom fallback **`Catch`**. If it fails,
 * it will enforce **`Catch`** instead of **`A2`**.
 * @param A1 to check against
 * @param A2 to try **`A1`** with
 * @param Catch to fallback (fail)
 * @returns **`A1`** or **`Catch`**
 * @example
 * ```ts
 * import {A} from 'ts-toolbelt'
 *
 * type test0 = A.Try<'42', string>          // '42'
 * type test1 = A.Try<'42', number>          // never
 * type test1 = A.Try<'42', number, 'tried'> // 'tried'
 * ```
 */
export type Try<A1 extends any, A2 extends any, Catch = never> =
    A1 extends A2
    ? A1
    : Catch
