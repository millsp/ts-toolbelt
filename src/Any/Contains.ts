import {False, True} from '../Boolean/Boolean'
import {Extends} from './Extends'

/** Check whether **`A1`** contains **`A2`** or not
 * (works like **`Extends`** with stricter results)
 */
export type Contains<A1 extends any, A2 extends any> =
    Extends<A2, A1> extends True
    ? True
    : False
