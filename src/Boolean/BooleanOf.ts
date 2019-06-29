import {True, False} from './_Boolean'

export type BooleanOf<B extends boolean> =
    B extends true
    ? True
    : False
