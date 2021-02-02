import {_Omit} from '../Object/Omit'
import {_Pick} from '../Object/Pick'
import {Length} from './Length'
import {List} from './List'

/**
 * Transform a [[List]] into an [[Object]] equivalent
 * @param L to transform
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type ObjectOf<O extends List> =
    O extends List
    ? number extends Length<O> // detect arrays
      ? _Pick<O, number>       // preserves arrays
      : _Omit<O, keyof any[]>  // transforms tuples
    : O
