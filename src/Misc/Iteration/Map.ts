import {Iteration} from '../../Iteration/Iteration'

/**
Describes a map of number relationships
*/
export type Map = {
    '0': Iteration              // Compulsory for negative operations
    'keys': Iteration           // Index O must specify the owned keys /!\ it is a tweak
    [k: string]: Iteration
    [k: number]: Iteration
    '__': ['__', '__', string, number, '-' | '0' | '+']
}
