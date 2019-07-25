import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {Length} from '../Tuple/Length'
import {At} from './At'
import {Cast} from '../Any/Cast'
import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Update} from '../Tuple/Update'
import {KeySet} from '../Tuple/_api'
import {Key} from '../Iteration/Key'
import {Prev} from '../Iteration/Prev'
import {Index} from '../_Internal'
import {Extends} from '../Any/Extends'
import {Equals} from '../Any/Equals'
import {True} from '../Boolean/_api'
import {Path} from './Path'
import {Nullable} from '../Union/Nullable'
import {Try} from '../Any/Try'

/** Replaces invalid parts of a path with `never`
 * @param O to be inspected
 * @param Path to be validated
 * @returns **`string[]`**
 * @example
 * ```ts
 * ```
 */
type _PathValid<O, Path extends Index[], I extends Iteration = IterationOf<'0'>> = {
    0: _PathValid<UNonNullable<At<O & {}, Path[Pos<I>]>>, Path, Next<I>>
    1: Update<Path, KeySet<Key<Prev<I>>, Length<Path, 's'>>, never>
}[
    Extends<[O], [never]>
]

/** Get in **`O`** the type of nested properties
 * @param O to be inspected
 * @param Path to be followed
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type PathValid<O extends object, Path extends Index[]> =
    _PathValid<O, Path> extends infer X
    ? Cast<X, Index[]>
    : never

export function getProp<O extends object, P extends Array<string | number>>(
    obj: Nullable<O>,
    ...keys: Cast<P, PathValid<O, P>>
): Path<O, P> | undefined {
    return keys.reduce(
        (result: any, key: string | number | symbol) => (result === null || result === undefined ? undefined : result[key]),
        obj,
    )
}

interface IInterface {
    a: {
    b: string[];
    };
}

type elem = IInterface['a']['b'][1]; // string
const a: IInterface = undefined as any

const res0 = getProp(a, 'a', 'b') // string[] | undefined
const res1 = getProp(a, 'a', 'b', 0) // TS2345: Argument of type '0' is not assignable to parameter of type 'never'.

