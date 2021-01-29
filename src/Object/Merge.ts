import {AtBasic} from './At'
import {_OptionalKeys} from './OptionalKeys'
import {Key} from '../Any/Key'
import {List} from '../List/List'
import {Depth, Anyfy} from './_Internal'
import {BuiltInObject} from '../Misc/BuiltInObject'
import {Length} from '../List/Length'
import {RequiredKeys} from '../List/RequiredKeys'
import {Exclude} from '../Union/Exclude'

/**
 * @hidden
 */
type Longer<L extends List, L1 extends List> =
    [Exclude<RequiredKeys<L1>, RequiredKeys<L>>] extends [never]
    ? 1
    : 0

/**
 * @hidden
 */
type MergeProp<OK, O1K, fill, OOKeys extends Key, K extends Key> =
  K extends OOKeys                // if prop of `O` is optional
  ? Exclude<OK, undefined> | O1K  // merge it with prop of `O1`
  : [OK] extends [never]          // if it does not exist
    ? O1K                         // complete with prop of `O1`
    : OK extends fill ? O1K : OK  // fill/replace if required

/**
 * @hidden
 */
type MergeFlatObject<O extends object, O1 extends object, fill, OOKeys extends Key = _OptionalKeys<O>> = {
  [K in keyof (Anyfy<O> & O1)]: MergeProp<AtBasic<O, K>, AtBasic<O1, K>, fill, OOKeys, K>
} & {}

/**
 * @hidden
 */
type MergeFlatList<L extends List, L1 extends List, ignore extends object, fill, LOK extends Key = _OptionalKeys<L>> =
  number extends Length<L | L1>
  ? MergeFlatChoice<L[number], L1[number], ignore, fill>[]
  : Longer<L, L1> extends 1
    ? { // L is longer
        [K in keyof L]: MergeProp<L[K], AtBasic<L1, K>, fill, LOK, K>
      }
    : { // L1 is longer
        [K in keyof L1]: MergeProp<AtBasic<L, K>, L1[K], fill, LOK, K>
      }

/**
 * @hidden
 */
export type MergeFlatChoice<O extends object, O1 extends object, ignore extends object, fill> =
  O extends ignore
  ? O
  : O1 extends ignore
    ? O
    : O extends List
      ? O1 extends List
        ? MergeFlatList<O, O1, ignore, fill>
        : MergeFlatObject<O, O1, fill>
      : MergeFlatObject<O, O1, fill>

/**
 * @hidden
 */
export type MergeFlat<O extends object, O1 extends object, ignore extends object = BuiltInObject, fill = never> =
  O extends unknown
  ? O1 extends unknown
    ? MergeFlatChoice<O, O1, ignore, fill>
    : never
  : never

/**
 * @hidden
 */
type MergeDeepList<L extends List, L1 extends List, ignore extends object, fill> =
  number extends Length<L | L1>
  ? MergeDeepChoice<L[number], L1[number], ignore, fill, never, any>[]
  : Longer<L, L1> extends 1
  ? { // L  is longer
      [K in keyof L]: MergeDeepChoice<L[K], AtBasic<L1, K>, ignore, fill, _OptionalKeys<L>, K>
    }
  : { // L1 is longer
      [K in keyof L1]: MergeDeepChoice<AtBasic<L, K>, L1[K], ignore, fill, _OptionalKeys<L>, K>
    }

/**
 * @hidden
 */
type MergeDeepObject<O extends object, O1 extends object, ignore extends object, fill, OOKeys extends Key = _OptionalKeys<O>> = {
  [K in keyof (Anyfy<O> & O1)]: MergeDeepChoice<AtBasic<O, K>, AtBasic<O1, K>, ignore, fill, OOKeys, K>
} & {}

/**
 * @hidden
 */
type MergeDeepChoice<OK, O1K, ignore extends object, fill, OOKeys extends Key, K extends Key> =
  [OK] extends [never]
  ? MergeProp<OK, O1K, fill, OOKeys, K>
  : [O1K] extends [never]
    ? MergeProp<OK, O1K, fill, OOKeys, K>
    : OK extends ignore
      ? MergeProp<OK, O1K, fill, OOKeys, K>
      : O1K extends ignore
        ? MergeProp<OK, O1K, fill, OOKeys, K>
        : OK extends List
          ? O1K extends List
            ? MergeDeepList<OK, O1K, ignore, fill>
            : MergeProp<OK, O1K, fill, OOKeys, K>
          : OK extends object
            ? O1K extends object
              ? MergeDeepObject<OK, O1K, ignore, fill>
              : MergeProp<OK, O1K, fill, OOKeys, K>
            : MergeProp<OK, O1K, fill, OOKeys, K>

/**
 * @hidden
 */
export type MergeDeep<O extends object, O1 extends object, ignore extends object = BuiltInObject, fill = never> =
  O extends unknown
  ? O1 extends unknown
    ? MergeDeepChoice<O, O1, ignore, fill, 'x', 'y'> // dummy x, y
    : never
  : never

/**
 * Accurately merge the fields of `O` with the ones of `O1`. It is
 * equivalent to the spread operator in JavaScript. [[Union]]s and [[Optional]]
 * fields will be handled gracefully.
 *
 * (⚠️ needs `--strictNullChecks` enabled)
 * @param O to complete
 * @param O1 to copy from
 * @param depth (?=`'flat'`) to do it deeply
 * @param style (?=`1`) 0 = lodash, 1 = ramda
 * @param ignore (?=`BuiltinObject`) types not to merge
 * @param fill (?=`fill`) types of `O` to be replaced with ones of `O1`
 * @returns [[Object]]
 * @example
 * ```ts
 * import {O} from 'ts-toolbelt'
 *
 * type O = {
 *  name?: string
 *  age? : number
 *  zip? : string
 *  pay  : {
 *      cvv?: number
 *  }
 * }
 *
 * type O1 = {
 *  age : number
 *  zip?: number
 *  city: string
 *  pay : {
 *      cvv : number
 *      ccn?: string
 *  }
 * }
 *
 * type test = O.Merge<O, O1, 'deep'>
 * // {
 * //     name?: string;
 * //     age: number;
 * //     zip?: string | number;
 * //     pay: {
 * //         cvv: number;
 * //         ccn?: string;
 * //     };
 * //     city: string;
 * // }
 * ```
 */
export type Merge<O extends object, O1 extends object, depth extends Depth = 'flat', ignore extends object = BuiltInObject, fill = never> = {
  'flat': MergeFlat<O, O1, ignore, fill>
  'deep': MergeDeep<O, O1, ignore, fill>
}[depth]
