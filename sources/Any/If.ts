import {Boolean} from '../Boolean/_Internal'

/**
 * Conditional if (behaves like the JS one)
 * @param B Condition
 * @param Then
 * @param Else (?=`'never'`)
 * @example
 * ```ts
 * import {A, B} from 'ts-toolbelt'
 *
 * type test0 = A.If<B.True, string, number>          // string
 * type test1 = A.If<B.False, string, number>         // number
 * type test1 = A.If<B.False, string>                 // never
 * type test1 = A.If<B.True, string>                  // string
 * ```
 */
export type If<B extends Boolean, Then, Else = never> =
    B extends 1
    ? Then
    : Else
