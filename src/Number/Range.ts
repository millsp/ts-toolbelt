import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Prepend} from '../Tuple/Prepend'
import {Prev} from '../Iteration/Prev'
import {Next} from '../Iteration/Next'
import {Number} from './Number'
import {Cast} from '../Any/Cast'
import {Formats} from '../Iteration/_Internal'
import {Way} from '../Iteration/_Internal'
import {Format} from '../Iteration/Format'
import {Tuple} from '../Tuple/Tuple'

type RangeForth<From extends Iteration, To extends Iteration, fmt extends Formats = 's', T extends Tuple = []> = {
    0: RangeForth<Prev<From>, To, fmt, Prepend<T, Format<From, fmt>>>
    1: T
}[
    From extends To
    ? 1
    : 0
]

type RangeBack<From extends Iteration, To extends Iteration, fmt extends Formats = 's', T extends Tuple = []> = {
    0: RangeBack<Next<From>, To, fmt, Prepend<T, Format<From, fmt>>>
    1: T
}[
    From extends To
    ? 1
    : 0
]

export type _Range<From extends Iteration, To extends Iteration, way extends Way, fmt extends Formats> = {
    '->': RangeForth<To, Prev<From>, fmt> // Reverse logic to work naturally #`Prepend`
    '<-': RangeBack<From, Next<To>, fmt>  // Works in reverse mode (default) #`Prepend`
}[way]

/** Create a range of **number**s
 * @param From to start with
 * @param To to end with
 * @param way to reverse it (?=`'->'`)
 * @param fmt output (?=`'s'`)
 * @returns **`string[] | number[] | boolean[]`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.Range<'-2', '1'>            // ['-2', '-1', '0', '1']
 * type test1 = N.Range<'-2', '1', '->'>      // ['-2', '-1', '0', '1']
 * type test2 = N.Range<'-2', '1', '<-'>      // ['1', '0', '-1', '-2']
 * type test3 = N.Range<'-2', '1', '->', 's'> // ['1', '0', '-1', '-2']
 * type test4 = N.Range<'-2', '1', '->', 'n'> // [-2 , -1 ,   0 ,   1 ]
 * ```
 */
export type Range<From extends Number, To extends Number, way extends Way = '->', fmt extends Formats = 's'> =
    _Range<IterationOf<From>, IterationOf<To>, way, fmt> extends infer X
    ? Cast<X, {s: string[], n: number[]}[fmt]>
    : never
