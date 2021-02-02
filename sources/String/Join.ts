import {Tail} from '../List/Tail'
import {List} from '../List/List'
import {Literal} from './_Internal'
import {Length} from '../List/Length'

/**
 * @hidden
 */
type _Join<T extends List<Literal>, D extends string, S extends string = ''> =
    T extends [Literal]
    ? `${S}${T[0]}`
    : _Join<Tail<T>, D, `${S}${T[0]}${D}`>

/**
 * Concat many literals together
 * @param T to concat
 * @param D to delimit
 */
export type Join<T extends List<Literal>, D extends string = ''> =
    T extends [] ? '' : number extends Length<T> ? string : _Join<T, D>
