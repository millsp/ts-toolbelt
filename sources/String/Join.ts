import {Tail} from '../List/Tail'
import {List} from '../List/List'
import {Literal} from './_Internal'

/**
 * @hidden
 */
type _Join<T extends List<Literal>, D extends string, S extends string = ''> =
    T extends [Literal]
    ? `${S}${T[0]}`
    : _Join<Tail<T>, D, `${S}${T[0]}${D}`>

export type Join<T extends List<Literal>, D extends string = ''> =
    T extends [] ? '' : number extends T['length'] ? string : _Join<T, D>
