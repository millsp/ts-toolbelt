import {False, True, Boolean} from '../Boolean/Boolean'
import {Equals} from '../Any/Equals'

/** Transform a **`string`** into a **`boolean`**
 * @param S to transform
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * ```
 */
export type BooleanOf<S extends string> = {
    1: Boolean
    0: S extends 'false'
       ? False
       : True
}[Equals<S, string>]
