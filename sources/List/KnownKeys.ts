import {KnownKeys as OKnownKeys} from '../Object/KnownKeys'
import {List} from './List'

/**
 * Get the known keys of a [[List]]
 * @param L
 * @returns [[Key]]
 * @example
 * ```ts
 * ```
 */
export type KnownKeys<L extends List> =
    Exclude<OKnownKeys<L>, keyof any[]>
