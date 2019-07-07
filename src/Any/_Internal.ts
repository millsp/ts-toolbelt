/** Describes the match strategy when matching types
 * * `contains->`: X contains Y
 * * `extends->` : X extends  Y
 * * `<-contains`: Y contains X
 * * `<-extends` : Y extends  X
 * * `equals`    : X equals   Y
 * * `default`   : `extends->`
 */
export type Match = 'contains->'
                  | 'extends->'
                  | '<-contains'
                  | '<-extends'
                  | 'equals'
                  | 'default'
