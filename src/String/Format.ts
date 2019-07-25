import {Formats} from './_Internal'
import {Pos} from '../Iteration/Pos'
import {IterationOf} from '../Iteration/IterationOf'
import {False, True} from '../Boolean/Boolean'
import {Extends} from '../Any/Extends'

export type Format<S extends string, fmt extends Formats> = {
    'b': {
        1: Boolean
        0: S extends 'false'
           ? False
           : True
    }[Extends<string, S>]
    'n': Pos<IterationOf<S>>
    's': S
}[fmt]
