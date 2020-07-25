import {List} from '../List/List'
import {_ObjectOf} from '../List/ObjectOf'

/**
Describes the permissions/modifiers fields can have
* `R`: readonly
* `W`: writable
* `!`: required
* `?`: optional
*/
export type Modx = ['?' | '!', 'W' | 'R']

/**
Describes the depth strategy when modifying types
*/
export type Depth = 'flat' | 'deep'

/**
 * Describes the merging strategy
 * `0`: lodash style. Preserves lists, and completes when undefined types
 * `1`: ramda style. Destroys lists, does not complete if undefined types
 */
export type MergeStyle = 0 | 1

/**
Make an object properties (all) `never`. We use this to intersect `object`s and
preserve the combine modifiers like `+readonly` and `?optional`.
 */
export type Anyfy<O extends object> = {
    [K in keyof O]: any
} & {}

/**
 * To apply [[ObjectOf]] on anything
 * @hidden
 */
export type NoList<A extends any> =
    A extends List
    ? _ObjectOf<A>
    : A
