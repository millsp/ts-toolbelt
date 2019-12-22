import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Prepend} from '../List/Prepend'
import {Prev} from '../Iteration/Prev'
import {Next} from '../Iteration/Next'
import {Number} from './Number'
import {Cast} from '../Any/Cast'
import {Formats} from '../Iteration/_Internal'
import {Way} from '../Iteration/_Internal'
import {Format} from '../Iteration/Format'
import {List} from '../List/List'

/**
 * @hidden
 */
type RangeForth<From extends Iteration, To extends Iteration, fmt extends Formats = 's', L extends List = []> = {
    0: RangeForth<Prev<From>, To, fmt, Prepend<L, Format<From, fmt>>>
    1: L
}[
    From extends To
    ? 1
    : 0
]

/**
 * @hidden
 */
type RangeBack<From extends Iteration, To extends Iteration, fmt extends Formats = 's', L extends List = []> = {
    0: RangeBack<Next<From>, To, fmt, Prepend<L, Format<From, fmt>>>
    1: L
}[
    From extends To
    ? 1
    : 0
]

/**
 * @hidden
 */
type _Range<From extends Iteration, To extends Iteration, way extends Way, fmt extends Formats> = {
    '->': RangeForth<To, Prev<From>, fmt> // Reverse logic to work naturally #`Prepend`
    '<-': RangeBack<From, Next<To>, fmt>  // Works in reverse mode (default) #`Prepend`
}[way]

/** Create a range of **number**s
 * @param From to start with
 * @param To to end with
 * @param way (?=`'->'`) to reverse it
 * @param fmt (?=`'s'`) output format
 * @returns **`string[] | number[] | boolean[]`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.Range<'-2', '1'>            // ['-2', '-1', '0', '1']
 * type test1 = N.Range<'-2', '1', '->'>      // ['-2', '-1', '0', '1']
 * type test2 = N.Range<'-2', '1', '<-'>      // ['1', '0', '-1', '-2']
 * type test3 = N.Range<'-2', '1', '<-', 's'> // ['1', '0', '-1', '-2']
 * type test4 = N.Range<'-2', '1', '->', 'n'> // [-2 , -1 ,   0 ,   1 ]
 * ```
 */
export type Range<From extends Number, To extends Number, way extends Way = '->', fmt extends Formats = 's'> =
    _Range<IterationOf<From>, IterationOf<To>, way, fmt> extends infer X
    ? Cast<X, (string | number)[]>
    : never
