import {Omit} from './Omit'
import {Key} from '../Iteration/Key'
import {Length} from './Length'
import {IterationOf} from '../Iteration/IterationOf'
import {Prev} from '../Iteration/Prev'
import {Max} from '../Number/Max'
import {Tuple} from './Tuple'

export type Pop<T extends Tuple> =
    Omit<T, Key<Prev<IterationOf<Max<Length<T, 's'>>>>>>
