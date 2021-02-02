import {Key} from './Key'
import {List} from '../List/List'

/**
 * Get in `O` the type of a field of key `K`
 * @param O to extract from
 * @param K to extract at
 * @returns [[Any]]
 * @example
 * ```ts
 * import {O} from 'ts-toolbelt'
 *
 * type User = {
 *  info: {
 *      name: string
 *      age: number
 *      payment: {}
 *  }
 *  id: number
 * }
 *
 * type test0 = O.At<User, 'id'> // number
 * ```
 */
export type At<O extends object, K extends Key> =
    O extends List
    ? number extends O['length']
      ? O[K & keyof O] | undefined
      : K extends keyof O ? O[K] : undefined
    : K extends keyof O ? O[K] : undefined
