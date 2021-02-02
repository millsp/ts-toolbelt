import {Split} from './Split'

/**
 * Get the length of a `string`
 * @param S
 */
export type Length<S extends string> =
    Split<S, ''>
