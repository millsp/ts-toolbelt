import {Patch as OPatch} from '../Object/Patch'
import {List} from './List'
import {Depth} from '../Object/_Internal'
import {BuiltInObject} from '../Misc/BuiltInObject'
import {Cast} from '../Any/Cast'

/**
 * Complete the fields of `L` with the ones of `L1`. This is a version of
 * [[Merge]] that does NOT handle optional fields, it only completes fields of `O`
 * with the ones of `O1` if they don't exist.
 *
 * (⚠️ needs `--strictNullChecks` enabled)
 * @param L to complete
 * @param L1 to copy from
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @param style (?=`1`) 0 = lodash, 1 = ramda
 * @param ignore (?=`BuiltinObject`) types not to merge
 * @param fill (?=`fill`) types of `O` to be replaced with ones of `O1`
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Patch<L extends List, L1 extends List, depth extends Depth = 'flat', ignore extends object = BuiltInObject, fill extends any = never> =
    Cast<OPatch<L, L1, depth, ignore, fill>, List>
