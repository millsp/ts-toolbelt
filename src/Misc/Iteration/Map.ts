import {Iteration} from '../../Iteration/Iteration'

/**
Describes a map of number relationships
*/
export type Map = {
    '0': Iteration<Map>              // Compulsory for negative operations
    'keys': Iteration<Map>           // Index O must specify the owned keys /!\ it is a tweak
    [k: string]: Iteration<Map>
    [k: number]: Iteration<Map>
    '__': ['__', '__', string, number, '-' | '0' | '+']
}
