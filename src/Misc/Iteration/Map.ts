import {Iteration} from '../../Iteration/Iteration'

/**
Describes a map of number relationships
*/
export type Map = {
    [k: string]: Iteration
    [k: number]: Iteration
    '0'        : Iteration // Compulsory for negative operations
    'keys'     : Iteration // Index O must specify the owned keys /!\ it is a tweak
    '__'       : ['__', '__', string, number, string, string, '-' | '0' | '+']
}
