/**
Describes compatible type formats
* `s`: **`string`**
* `n`: **`number`**
*/
export type Formats = 'n' | 's'

/**
Describes how to perform iterations
*/
export type Way = '->' | '<-'

// ---------------------------------------------------------------------------------------

/**
Generate the [[IterationOf]] type
@param min -40
@param max +40
*/
const IterationOfGenerator = (name: string, min: number, max: number) => {
    let unionWithPrevious = `"${min}"`

    console.log(`{"${min}": ["__", "${min + 1}", "${min}", ${min}, "${min * -1}", ${unionWithPrevious}, "-"],`)

    for (let i = min + 1, k = 1; i <= max - 1; i++, k++) {
        unionWithPrevious = `${name}["${i - 1}"][5] | "${i}"`

        // eslint-disable-next-line no-nested-ternary
        console.log(`"${i}": ["${i - 1}", "${i + 1}", "${i}", ${i}, "${i * -1}", ${unionWithPrevious}, "${i > 0 ? '+' : i < 0 ? '-' : '0'}"],`)
    }

    unionWithPrevious = `${name}["${max - 1}"][5] | "${max}"`

    console.log(`"${max}": ["${max - 1}", "__", "${max}", ${max}, "${max * -1}", ${unionWithPrevious}, "+"]}`)
}

IterationOfGenerator('NumberMap', -100, +100)
