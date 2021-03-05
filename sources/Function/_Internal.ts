/**
 * Describes function modes
 * `sync` : Normal function
 * `async`: Promised result
 */
export type Mode = 'sync' | 'async'

/**
 * Describes function parameter input
 * `multi`: ( a, b, c ... n ) => X
 * `list` : ([a, b, c ... n]) => X
 */
export type Input = 'multi' | 'list'

/**
 * Describes types that can be narrowed
 */
export type Narrowable =
| string
| number
| bigint
| boolean
