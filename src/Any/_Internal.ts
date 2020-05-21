import {_NumberOf} from '../Number/NumberOf'
import {NumberMap} from '../Misc/Iteration/Number'

/**
 * Describes the match strategy when matching types
 * * `default`   : `extends->`
 * * `contains->`: X contains Y
 * * `extends->` : X extends  Y
 * * `<-contains`: Y contains X
 * * `<-extends` : Y extends  X
 * * `equals`    : X equals   Y
 */
export type Match = | 'default'
                    | 'implements->'
                    | '<-implements'
                    | 'extends->'
                    | '<-extends'
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
