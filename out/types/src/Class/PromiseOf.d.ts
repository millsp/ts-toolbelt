/** Get the instance type wrapped within a **`Promise`**
 * @param P **`Promise`**
 * @returns **`any`**
 * @example
 */
export declare type PromiseOf<P extends Promise<any>> = P extends Promise<infer A> ? A : never;
