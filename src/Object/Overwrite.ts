import {At} from './At'

/** Update the fields of **`O`** with the ones of **`O1`**
 * (only the existing fields will be updated)
 * @param O to update
 * @param O1 to update with
 * @returns **`object`**
 * @example
 */
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: At<O1, K>
}
