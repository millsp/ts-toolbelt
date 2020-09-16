import {NumberOf as NNumberOf} from '../Number/NumberOf'

/**
 * Describes the match strategy when matching types
 * * `default`     : `extends->`
 * * `contains->`  : X contains   Y ([[Contains]]<X, Y>)
 * * `extends->`   : X extends    Y ([[Extends]]<X, Y>)
 * * `<-contains`  : Y contains   X ([[Contains]]<Y, X>)
 * * `<-extends`   : Y extends    X ([[Extends]]<Y, X>)
 * * `equals`      : X equals     Y (([[Equals]]<X, Y>))
 */
export type Match = | 'default'
                    | 'contains->'
                    | 'extends->'
                    | '<-contains'
                    | '<-extends'
                    | 'equals'

/**
 * @hidden
 */
export type NumberOf<N extends any> =
    N extends number
    ? NNumberOf<N>
    : N

/**
 * @hidden
 */
export type _Promise<A extends any> =
    Promise<A>
