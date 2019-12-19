import {Union} from './Union'

/** Add **`undefined`** to **`U`**
 * @param U to make nullable
 * @returns [[Union]]
 * @example
 * ```ts
 * ```
 */
export type Nullable<U extends Union> =
    U | undefined
