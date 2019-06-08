/** Describes the match strategy when matching types
 * - extends => X extends Y
 * - equals  => X equals  Y
 * - loose   => X extends Y || Y extends X
 */
export declare type Match = 'extends' | 'equals' | 'loose' | 'default';
