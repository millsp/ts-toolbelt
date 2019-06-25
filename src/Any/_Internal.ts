/** Describes the match strategy when matching types
 * * `extends`: X extends Y
 * * `equals` : X equals  Y
 * * `loose`  : X extends Y || Y extends X
 * * `default`: extends (unless mentioned)
 */
export type Match = 'extends' | 'equals' | 'loose' | 'default'

