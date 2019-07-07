import {Nbr, Formats} from './_Internal'
import {IsZero} from './IsZero'
import {Not} from '../Boolean/Not'
import {Pos} from '../Iteration/Pos'
import {IterationOf} from '../Iteration/IterationOf'

export type Format<N extends Nbr, fmt extends Formats> = {
    's': N
    'n': Pos<IterationOf<N>>
    'b': Not<IsZero<N>>
}[fmt]
