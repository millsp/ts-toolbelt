import {At as OAt} from '../Object/At'
import {Index} from '../Any/Index'
import {List} from './List'
import {Boolean, True} from '../Boolean/Boolean'

/** Get in **`T`** the type of an entry of key **`K`**
 * @param T to extract from
 * @param K **`keyof`** to extract at
 * @param strict (?=`True`) `False` enables using keys `string | number | symbol`
 * @returns **`any`**
 * @example
 */
export type At<T extends List, K extends Index, strict extends Boolean = True> =
    OAt<T, K, strict>
