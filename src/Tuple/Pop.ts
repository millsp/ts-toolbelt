import {Omit} from './Omit'
import {Key} from '../Iteration/Key'
import {Length} from './Length'
import {IterationOf} from '../Iteration/IterationOf'
import {Prev} from '../Iteration/Prev'
import {Max} from '../Number/Max'

export type Pop<T extends any[]> =
    Omit<T, Key<Prev<IterationOf<Max<Length<T, 's'>>>>>>
