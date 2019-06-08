/** Similar to **`Cast`** but with a custom fallback **`Catch`**
 * If it fails, it will enforce **`Catch`** instead of **`A2`**
 * @param A1 to check against
 * @param A2 to try **`A1`** with
 * @returns **`A1`** or **`Catch`**
 * @example
 */
export type Try<A1 extends any, A2 extends any, Catch = never> =
    A1 extends A2
    ? A1
    : Catch
