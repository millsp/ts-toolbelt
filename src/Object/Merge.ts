import {Omit} from './Omit'
import {Extends} from '../Any/Extends'
import {At} from './At'
import {And} from '../Boolean/And'
import {True} from '../Boolean/Boolean'
import {Compute} from '../Any/Compute'
import {Index} from '../_Internal'
import {Depth} from './_Internal'

type MergeProp<O extends object, O1P extends object, K extends Index> =
    K extends keyof O
    ? O[K]
    : K extends keyof O1P
      ? O1P[K]
      : never

type MergeFlat<O extends object, O1P extends object> =
    _MergeFlat<O, Omit<O1P, keyof O>>
    // We need to exclude `O` out of `O1` to preserve modifiers
    // because doing `keyof (O & O1O)` mixes the modifiers up

type _MergeFlat<O extends object, O1P extends object> = {
    [K in keyof (O & O1P)]: MergeProp<O, O1P, K>
    // for each property, pick what's available in `O` or `O1`
    // at this stage `O1P` is just a part of the original `O1`
    // => it's the part of `O1` that does not overlap with `O`
}

type MergeDeep<O extends object, O1 extends object> =
    Compute<_MergeDeep<O, Omit<O1, keyof O>, O1>>
    // same principle as above, but with a little tweak
    // we keep the original `O1` to know if we can merge it
    // => if `O` and `O1` have `object` fields of same name
    // => then it means that both fields can be merged deeply
    // => and this is the meaning of what is programmed below

type _MergeDeep<O extends object, O1P extends object, O1 extends object> = {
    [K in keyof (O & O1P)]: And<Extends<At<O, K>, object>, Extends<At<O1, K>, object>> extends True
                            ? MergeDeep<At<O, K> & {}, At<O1, K> & {}>
                            : MergeProp<O, O1, K>
}

/** Complete the fields of **`O`** with the ones of **`O1`**
 * ('deep' option will skip any nullable object to be merged)
 * @param O to complete
 * @param O1 to copy from
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Merge<O extends object, O1 extends object, depth extends Depth = 'flat'> = {
    'flat': MergeFlat<O, O1>
    'deep': MergeDeep<O, O1>
}[depth]
