import { Path as OPath } from '../Object/Path';
import { List } from '../_Internal';
import { Cast } from '../Any/Cast';
/** Check whether **`T`** has nested properties that match **`M`**
 * @param T to be inspected
 * @param Path to be followed
 * @returns **`true`** or **`false`**
 * @example
 */
export declare type Path<T extends List, Path extends string[]> = OPath<T, Path> extends infer X ? Cast<X, List> : never;
