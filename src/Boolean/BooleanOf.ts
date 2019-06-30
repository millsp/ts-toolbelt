import {True, False} from './Boolean'

export type BooleanOf<B extends boolean> =
    B extends true
    ? True
    : False
