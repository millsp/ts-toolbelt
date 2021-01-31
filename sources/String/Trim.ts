import {Replace} from './Replace'

export type Trim<S extends string> =
    Replace<S, ' ', ''>
