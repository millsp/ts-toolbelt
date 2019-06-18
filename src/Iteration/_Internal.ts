/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

/** Describes an **`Iteration`**-**number** relationship
 */
export type FormatMap = {
    's': 2 // Iteration[2] => string
    'n': 3 // Iteration[3] => number
}

/** Describes the format of a **number**
 * - `s`: **`string`**
 * - `n`: **`number`**
 */
export type Format = keyof FormatMap

// ---------------------------------------------------------------------------------------

/** Generate the **`IterationOf`** type
 * @param min -40
 * @param max +40
 */
const IterationOfGenerator = (min: number, max: number) => {
    console.log(`{"${min}": ["__", "${min + 1}", "${min}", ${min}, "-"],`)

    // eslint-disable-next-line fp/no-loops
    for (let i = min + 1, k = 1; i <= max - 1; i++, k++)
        // eslint-disable-next-line no-nested-ternary
        console.log(`"${i}": ["${i - 1}", "${i + 1}", "${i}", ${i}, "${i > 0 ? '+' : i < 0 ? '-' : '0'}"],`)

    console.log(`"${max}": ["${max - 1}", "__", "${max}", ${max}, "+"],`)
    console.log('"__": ["__", "__", string, number, "-" | "0" | "+"]}')
}

IterationOfGenerator(-40, +40)
