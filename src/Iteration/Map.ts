import {Iteration} from './Iteration'

/**
 * Defines a basic map that will be passed to [[CreateMap]]
 * @hidden
 */
type RawMap = {
    [K in string]: Iteration
}

/**
 * Serves the purpose of completing a [[RawMap]]'s boundaries
 * @hidden
 */
type BoundMap = {
    [K in string]: ['__', '__', string, number, string, string, '-' | '0' | '+']
}

/**
 * Defines how to define the keys that make a [[RawMap]]
 * @hidden
 */
type Keys<M extends RawMap> = {
    '-': keyof M
    '0': keyof M
    '+': keyof M
}

/**
Describes a map of number relationships
*/
export type Map = [
    Keys<RawMap>,
    RawMap
]

/**
Creates a [[Map]] of number relationships
*/
export type CreateMap<K extends Keys<RawMap>, RM extends RawMap> = [
    K,
    RM & BoundMap
]
