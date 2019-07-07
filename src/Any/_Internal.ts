/** Describes the match strategy when matching types
 * * `r-contains`: X contains Y
 * * `r-extends` : X extends  Y
 * * `l-contains`: Y contains X
 * * `l-extends` : Y extends  X
 * * `equals`    : X equals   Y
 * * `default`   : `r-extends`
 */
export type Match = 'r-contains'
                  | 'r-extends'
                  | 'l-contains'
                  | 'l-extends'
                  | 'equals'
                  | 'default'
