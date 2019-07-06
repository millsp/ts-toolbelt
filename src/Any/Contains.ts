import {False, True} from '../Boolean/Boolean'
import {Extends} from './Extends'

/** Check whether **`A1`** is part of **`A2`** or not
 * (works as **`Extends`** does but is much stricter)
 */
export type Contains<A1 extends any, A2 extends any> =
    Extends<A1, A2> extends True
    ? True
    : False
