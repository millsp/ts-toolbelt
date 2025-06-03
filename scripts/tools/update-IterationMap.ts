/*
   the maximum stack depth for recursive conditional types often changes - see https://github.com/microsoft/TypeScript/pull/45711
   You can use this script to easily change the range of numbers defined in IterationMap. for example:
   `ts-node scripts/tools/update-IterationMap.ts -1000 1000` will change the range from -1000 to 1000
 */

import replace from './regex-update-file'
import {Iteration} from '../../sources/Iteration/Iteration'

const start = Number(process.argv[2])
const end = Number(process.argv[3]);

[start, end].forEach((num) => {
    if (isNaN(num))
        throw new Error('not a number')
    else
        return num
})

const iterations: string[] = ["'__': [number, '-' | '0' | '+', '__', '__', '__'],"]

type Sign = Iteration[1]

for (let i = start; i <= end; i++) {
    let sign: Sign
    if (i < 0)
        sign = '-'
    else if (i === 0)
        sign = '0'
    else
        sign = '+'
    iterations.push(`'${i}': [${i}, '${sign}', '${i === start? '__': i - 1}', '${i === end? '__': i + 1}', '${i * -1}'],`)
}

replace('./sources/Iteration', /type IterationMap = \{(.|\n)*\}/um,
    `type IterationMap = {
    ${iterations.join('\n    ')}
}`,
    ['Iteration.ts'],
    [],
)
