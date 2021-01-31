import {Split} from './Split'

export type Length<S extends string> =
    Split<S, ''>['length']
