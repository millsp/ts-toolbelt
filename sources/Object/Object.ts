import {Key} from '../Any/Key'
import {Record} from './Record'

/**
 * An [[Object]]
 * @example
 * ```ts
 * type object0 = {a: "hello"}
 * type string1 = {b: "world"}
 * ```
 */
export type Object =
    Record<Key, any>
