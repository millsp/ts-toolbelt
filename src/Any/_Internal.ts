import {_NumberOf} from '../Number/NumberOf'
import {NumberMap} from '../Iteration/Maps/Number'

/**
 * Describes the match strategy when matching types
 * * `default`     : `extends->`
 * * `contains->`  : X contains   Y ([[Contains]]<X, Y>)
 * * `extends->`   : X extends    Y ([[Extends]]<X, Y>)
 * * `implements->`: X implements Y ([[Implements]]<X, Y>)
 * * `<-contains`  : Y contains   X ([[Contains]]<Y, X>)
 * * `<-extends`   : Y extends    X ([[Extends]]<Y, X>)
 * * `<-implements`: Y implements X ([[Implements]]<Y, X>)
 * * `equals`      : X equals     Y (([[Equals]]<X, Y>))
 */
export type Match = | 'default'
                    | 'contains->'
                    | 'extends->'
                    | 'implements->'
                    | '<-contains'
                    | '<-extends'
                    | '<-implements'
                    | 'equals'

/**
 * @hidden
 */
export type NumberOf<N extends any> =
    N extends number
    ? _NumberOf<N, NumberMap>
    : N

/**
 * @hidden
 */
export type _Promise<A extends any> =
    Promise<A>
