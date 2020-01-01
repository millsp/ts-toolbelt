import {At as OAt} from '../Object/At'
import {Key} from '../Any/Key'
import {List} from './List'
import {Boolean} from '../Boolean/Boolean'

/**
Get in **`L`** the type of an entry of key **`K`**
@param L to extract from
@param K to extract at
@param strict (?=`1`) `0` to work with unions
@returns **`any`**
@example
*/
export type At<L extends List, K extends Key, strict extends Boolean = 1> =
    OAt<L, K, strict>
