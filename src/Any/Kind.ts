import {Extends} from './Extends'
import {List} from '../List/List'

/**
 * @hidden
 */
type _Kind<A extends any> =
    Extends<A, Function> extends 1 ? 'function' : // the order  // to
    Extends<A, List>     extends 1 ? 'array'    : // of this is // untangle
    Extends<A, object>   extends 1 ? 'object'   : // important  // object types
    Extends<A, string>   extends 1 ? 'string'   :
    Extends<A, number>   extends 1 ? 'number'   :
    Extends<A, boolean>  extends 1 ? 'boolean'  :
    'unknown'

/**
 * Get the literal kind of a type
 * @param A
 * @returns `'string' | 'number' | 'function' | 'array' | 'object' | 'boolean' | 'unknown'`
 * @example
 * ```ts
 * import {A} from 'ts-toolbelt'
 *
 * type test0 = A.Kind<'hello'> // 'string'
 * type test1 = A.Kind<42> // 'number'
 * type test2 = A.Kind<[1, 2, 3]> // 'array'
 * type test3 = A.Kind<{a: string}> // 'object'
 * type test4 = A.Kind<() => {}> // 'function'
 * ```
 */
export type Kind<A extends any> =
    A extends unknown
    ? _Kind<A>
    : never
