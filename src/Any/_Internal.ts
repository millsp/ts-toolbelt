/** Describes the match strategy when matching types
 * - extends => X extends Y
 * - equals  => X equals  Y
 * - loose   => X extends Y || Y extends X
 */
export type Match = 'extends' | 'equals' | 'loose' | 'default'
