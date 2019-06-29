/** Describes an **`Iteration`**-**boolean** relationship
 */
export type FormatMap = {
    's': ['false', 'true'] // 0: 'false', 1: 'true'
    'b': [ false,   true ] // 0:  false , 1:  true
}

/** Describes the format of a **boolean**
 * * `s`: **`string`**
 * * `n`: **`number`**
 */
export type Format = keyof FormatMap
