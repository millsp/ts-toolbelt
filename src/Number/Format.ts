import {Formats} from './_Internal'
import {Number} from './Number'
import {IsZero} from './IsZero'
import {Not} from '../Boolean/Not'
import {Pos} from '../Iteration/Pos'
import {IterationOf} from '../Iteration/IterationOf'

// todo
export type Format<N extends Number, fmt extends Formats> = {
    'b': Not<IsZero<N>>
    'n': Pos<IterationOf<N>>
}[fmt]
