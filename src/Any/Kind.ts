import {Extends} from './Extends'
import {True} from '../Boolean/Boolean'
import {Tuple} from '../Tuple/Tuple'

/** Get the literal kind of a type
 * @param A
 * @returns **`'string' | 'number' | 'function' | 'array' | 'object' | 'boolean'`**
 * @example
 * ```ts
 * ```
 */
export type Kind<A extends any> =
    Extends<A, Function> extends True  ? 'function': // the order  // to
    Extends<A, Tuple> extends True     ? 'array'   : // of this is // untangle
    Extends<A, object> extends True    ? 'object'  : // important  // object types
    Extends<A, string> extends True    ? 'string'  :
    Extends<A, number> extends True    ? 'number'  :
    Extends<A, boolean> extends True   ? 'boolean' :
    'unknown'
