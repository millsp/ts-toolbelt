import {Overwrite} from '../Object/Overwrite'
import {List} from './List'

/** @ignore *//** */

/**
 *
 */
export type Naked<L extends List> =
    Overwrite<Required<L>, L>
