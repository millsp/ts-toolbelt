import {Boolean} from '../Boolean/_Internal'

/**
 * Returns `Then` if the boolean condition `B` is true (`1`),
 * otherwise returns `Else` (defaults to `never`).
 *
 * @param B - A boolean condition represented as `0` or `1`
 * @param Then - The type to return if `B` is `1`
 * @param Else - The type to return if `B` is `0` (defaults to `never`)
 * @example
 * ```ts
 * import {A} from 'ts-toolbelt'
 *
 * type test1 = A.If<1, string, number> // string
 * type test2 = A.If<0, string, number> // number
 * type test3 = A.If<1, string>         // string
 * type test4 = A.If<0, string>         // never
 * ```
 */
export type If<B extends Boolean, Then, Else = never> =
    B extends 1
    ? Then
    : Else
