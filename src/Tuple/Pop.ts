import {Omit} from './Omit'
import {Key} from '../Iteration/Key'
import {Length} from './Length'
import {IterationOf} from '../Iteration/IterationOf'
import {Prev} from '../Iteration/Prev'
import {Cast} from '../Any/Cast'

export type Pop<T extends any[]> =
    Omit<T, Key<Prev<IterationOf<Length<T, 's'>>>>> extends infer X
    ? Cast<X, any[]>
    : never
