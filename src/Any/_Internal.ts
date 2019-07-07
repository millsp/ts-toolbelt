/** Describes the match strategy when matching types
 * * `contains` : X contains Y
 * * `extends`  : X extends  Y
 * * `equals`   : X equals   Y
 * * `rcontains`: Y contains X
 * * `rextends` : Y extends  X
 * * `requals`  : Y equals   X
 * * `default`  : extends (unless mentioned)
 */
export type Match = 'contains'
                  | 'extends'
                  | 'equals'
                  | 'rcontains'
                  | 'rextends'
                  | 'requals'
                  | 'default'
