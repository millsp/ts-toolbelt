import {IterationMap} from '../Iteration/IterationOf'
import {SelectKeys} from '../Object/SelectKeys'
import {Numbers} from './_Internal'
import {Key} from '../Iteration/Key'

/** Transform a **number** into a **`string`**
 * @param N to stringify
 * @returns **`string`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.StringOf<5>  //  '5'
 * type test1 = N.StringOf<-5> // '-5'
 * ```
 */
export type NumberOf<N extends number> =
    N extends Numbers['number']['all'] // Expensive with numbers
    ? Key<IterationMap[SelectKeys<IterationMap, [any, any, any, N, any]>]>
    : string
