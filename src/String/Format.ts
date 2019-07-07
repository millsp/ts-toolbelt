import {Formats} from './_Internal'
import {Pos} from '../Iteration/Pos'
import {IterationOf} from '../Iteration/IterationOf'
import {False, True} from '../Boolean/Boolean'
import {Extends} from '../Any/Extends'

export type Format<S extends string, fmt extends Formats> = {
    's': S
    'n': Pos<IterationOf<S>>
    'b': {
        1: Boolean
        0: S extends 'false'
           ? False
           : True
    }[Extends<string, S>]
}[fmt]
