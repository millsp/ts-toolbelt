import {List} from '../List/List'
import {Literal} from './_Internal'
import {Cast} from '../Any/Cast'

/**
 * @hidden
 */
type _Join<T extends List, D extends string, Result extends string> =
    T extends [] ? Result :
    T extends [Literal] ? `${Result}${T[0]}` :
    T extends [Literal, ...infer R] ? _Join<R, D, `${Result}${T[0]}${D}`>:
    string

/**
 * Concat many literals together
 * @param T to concat
 * @param D to delimit
 */
export type Join<T extends List<Literal>, D extends string = ''> =
    _Join<T, D, ''> extends infer X
    ? Cast<X, string>
    : never
