import {Literal} from './_Internal'

export type Replace<S extends string, R extends Literal, W extends Literal> =
    S extends `${infer BS}${R}${infer AS}`
    ? Replace<`${BS}${W}${AS}`, R, W>
    : S
