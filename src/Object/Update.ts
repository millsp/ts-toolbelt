/** Update in **`O`** the fields of key **`K`** with **`A`**
 * @param O to update
 * @param K to chose fields
 * @param A to update with
 * @returns **`object`**
 * @example
 */
export type Update<O extends object, K extends string, A extends any> = {
    [P in keyof O]: P extends K
                    ? A
                    : O[P]
}
