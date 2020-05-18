/**
Describes the permissions/modifiers fields can have
* `R`: readonly
* `W`: writable
* `!`: required
* `?`: optional
*/
export type Modx = ['?' | '!', 'W' | 'R']

/**
Describes the depth strategy when modifying types
*/
export type Depth = 'flat' | 'deep'

/**
Make an object properties (all) `never`. We use this to intersect `object`s and
preserve the combine modifiers like `+readonly` and `?optional`.
 */
export type Anyfy<O extends object> = {
    [K in keyof O]: any
}
