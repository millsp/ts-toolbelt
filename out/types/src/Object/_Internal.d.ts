/** Describes the permissions/modifiers fields can have
 * - R => readonly
 * - W => writable
 * - ! => required
 * - ? => optional
 */
export declare type Modx = ['?' | '!', 'W' | 'R'];
/** Describes the depth strategy when modifying types
 */
export declare type Depth = 'flat' | 'deep';
