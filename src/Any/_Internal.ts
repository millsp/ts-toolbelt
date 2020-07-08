import {_NumberOf} from '../Number/NumberOf'
import {NumberMap} from '../Misc/Iteration/Number'

/**
 * Describes the match strategy when matching types
 * * `default`     : `extends->`
 * * `contains->`  : X contains   Y
 * * `extends->`   : X extends    Y
 * * `implements->`: X implements Y
 * * `<-contains`  : Y contains   X
 * * `<-extends`   : Y extends    X
 * * `<-implements`: Y implements X
 * * `equals`      : X equals     Y
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
