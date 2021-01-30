/**
 * Describes how to perform iterations
 */
export type Way = '->' | '<-'

// ---------------------------------------------------------------------------------------

/**
 * Generate the [[IterationOf]] type
 * @param min -40
 * @param max +40
 */
const IterationOfGenerator = (min: number, max: number) => {
    // eslint-disable-next-line no-nested-ternary
    const sign = (i: number) => `"${i > 0 ? '+' : i < 0 ? '-' : '0'}"`
    const prev = (i: number) => `"${i === min ? '__' : i - 1}"`
    const next = (i: number) => `"${i === max ? '__' : i + 1}"`
    const oppo = (i: number) => `"${i * -1}"`
    const entry = (i: number) => `"${i}": [${i}, ${sign(i)}, ${prev(i)}, ${next(i)}, ${oppo(i)}],`

    console.log(`{${entry(min)}`)

    for (let i = min + 1, k = 1; i <= max - 1; i++, k++)
        console.log(entry(i))

    console.log(`${entry(max)}}`)
}

IterationOfGenerator(-100, +100)
