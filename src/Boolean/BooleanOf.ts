import {False, True} from './Boolean'

export type BooleanOf<B extends boolean> =
    B extends true
    ? True
    : False
