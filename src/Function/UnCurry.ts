import {Curry} from './Curry'

/**
Undoes the work that was done by [[Curry]]
@param F to uncurry
@returns [[Function]]
@example
@ignore
*/
export type UnCurry<F extends Curry<any>> =
    F extends Curry<infer UF>
    ? UF
    : never
