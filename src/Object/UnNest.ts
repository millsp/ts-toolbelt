import {Index} from '../_Internal'
import {UnionOf} from '../Tuple/UnionOf'

/** Transform an **`object`**'s values into an **union**
 * @param O to transform
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type UnNest<O, K extends Index = keyof O> = O extends {
    [key in K]?: infer B;
}
    ? UnionOf<B>
    : never;
