/** Describes the permissions/modifiers fields can have
 * * `R`: readonly
 * * `W`: writable
 * * `!`: required
 * * `?`: optional
 */
export type Modx = ['?' | '!', 'W' | 'R']

/** Describes the depth strategy when modifying types
 */
export type Depth = 'flat' | 'deep'
