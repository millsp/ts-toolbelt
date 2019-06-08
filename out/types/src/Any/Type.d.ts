/** Create your own named sub-type from a type **`A`**
 * @param A to be personalized
 * @param Id to name the sub-type
 * @returns A new type **`Type<A, Name>`**
 * @example
 */
export declare type Type<A extends any, Id extends string> = A & [Id];
