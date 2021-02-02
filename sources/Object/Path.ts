import {Key} from '../Any/Key'
import {List} from '../List/List'
import {Tail} from '../List/Tail'
import {At} from './At'

/**
 * @ignore
 */
type _Path<O, P extends List<Key>> = At<{
    [K in keyof O]: P['length'] extends 1
    ? O[K] : Path<O[K] & {}, Tail<P>>
}, P[0]>

/**
 * Get in `O` the type of nested properties
 * @param O to be inspected
 * @param Path to be followed
 * @returns [[Any]]
 * @example
 * ```ts
 * ```
 */
export type Path<O, P extends List<Key>> =
    number extends P['length'] ? unknown : _Path<O, P>
