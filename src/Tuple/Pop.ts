import {Omit} from './Omit'
import {Tuple} from './Tuple'
import {LastIndex} from './LastIndex'
import {Required} from '../Object/Required'
import {Cast} from '../Any/Cast'

export type Pop<T extends Tuple> =
    Omit<T, LastIndex<Cast<Required<T>, Tuple>, 's'>>
