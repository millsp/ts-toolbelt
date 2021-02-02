import {Literal} from './_Internal'

/**
 * Replace `R` with `W` in `S`
 * @param S
 * @param R
 * @param W
 */
export type Replace<S extends string, R extends Literal, W extends Literal> =
    S extends `${infer BS}${R}${infer AS}`
    ? Replace<`${BS}${W}${AS}`, R, W>
    : S
