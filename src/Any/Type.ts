/** Create your own named sub-type from a type **`A`**
 * @param A to be personalized
 * @param Id to name the sub-type
 * @returns A new type **`Type<A, Name>`**
 * @example
 * ```ts
 * import {A} from 'ts-toolbelt'
 *
 * type eur = A.Type<number, 'eur'> // number & {__type: 'eur'}
 * type usd = A.Type<number, 'usd'> // number & {__type: 'eur'}
 * ```
 */
export type Type<A extends any, Id extends string> =
    A & {__type: Id}
