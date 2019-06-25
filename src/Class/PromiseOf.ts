/** Get the instance type wrapped within a **`Promise`**
 * @param P **`Promise`**
 * @returns **`any`**
 * @example
 * ```ts
 * const promise = new Promise<string>((res, rej) => res('x'))
 *
 * type test0 = PromiseOf<typeof promise>  // string
 * type test1 = PromiseOf<Promise<number>> // number
 * ```
 */
export type PromiseOf<P extends Promise<any>> =
    P extends Promise<infer A>
    ? A
    : never
