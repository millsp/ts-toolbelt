/** Describes compatible type formats
 * * `s`: **`string`**
 * * `n`: **`number`**
 */
export type Formats = 'n' | 's'

/** Describes how to perform iterations
 */
export type Way = '->' | '<-'

// ---------------------------------------------------------------------------------------

/** Generate the **`IterationOf`** type
 * @param min -40
 * @param max +40
 */
const IterationOfGenerator = (min: number, max: number) => {
    console.log(`{"${min}": ["__", "${min + 1}", "${min}", ${min}, "-"],`)

    for (let i = min + 1, k = 1; i <= max - 1; i++, k++) {
        // eslint-disable-next-line no-nested-ternary
        console.log(`"${i}": ["${i - 1}", "${i + 1}", "${i}", ${i}, "${i > 0 ? '+' : i < 0 ? '-' : '0'}"],`)
    }

    console.log(`"${max}": ["${max - 1}", "__", "${max}", ${max}, "+"],`)
    console.log('[x: string]: [string, string, string, number, "-" | "0" | "+"]}')
}

IterationOfGenerator(-40, +40)
