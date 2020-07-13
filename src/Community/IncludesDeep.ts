import {Match} from '../Any/_Internal'
import {Number} from '../Number/Number'
import {UnionOf} from '../Object/UnionOf'
import {Next} from '../Iteration/Next'
import {Key} from '../Iteration/Key'
import {Prev} from '../Iteration/Prev'
import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {Is} from '../Any/Is'

/**
 * @hidden
 */
type _IncludesDeep<O, M extends any, match extends Match = 'default', limit extends Number = '10', I extends Iteration = IterationOf<'0'>> = {
    0: _IncludesDeep<O extends object ? UnionOf<O> : O, M, match, limit, Next<I>>
    1: 1
    2: 0
}[
    Key<Prev<I>> extends limit // if we go past the limit
    ? 2                        // end the loop here
    : Is<O, M, match>          // if 0 => continue, if 1 => end
]

/**
 * Check whether **`O`**, or its sub-objects have fields that match **`M`**
 * where the maximum allowed depth is set with **`limit`**.
 *
 * @param O to be inspected
 * @param M to check field type
 * @param match (?=`'default'`) to change precision
 * @param limit (?=`'10'`) to change the check depth
 * @returns [[Boolean]]
 * @example
 * ```ts
 * ```
 * @author millsp, ctrlplusb
 */
export type IncludesDeep<O extends object, M extends any, match extends Match = 'default', limit extends Number = '10'> =
    _IncludesDeep<O, M, match, limit>
