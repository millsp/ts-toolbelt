/** Describes the match strategy when matching types
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
