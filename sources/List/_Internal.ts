/** @ignore *//** */

import {Overwrite} from '../Object/Overwrite'
import {List} from './List'

/**
 * Remove `?` & `readonly` from a [[List]]
 */
export type Naked<L extends List> =
    Overwrite<Required<L>, L>

export type Key = string | number | symbol
