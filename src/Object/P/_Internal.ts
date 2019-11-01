import {Index} from '../../Any/Index'

/**
 * @internal
 */
export type Path = [Index, ...Index[]]

/**
 * to reach a  property we use `Pos<I> extends LastIndex<Path>`
 * to reach an object   we use `Pos<I> extends Length<Path>`
 */
