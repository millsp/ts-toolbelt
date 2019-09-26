import {Modx} from './_Internal'
import {Index} from '../Any/Index'

/** Create an object filled with **`A`** for the fields **`K`**
 * @param K to choose fields
 * @param A to fill fields with
 * @param modx to set modifiers (?=['!', 'W'])
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Record<K extends Index, A extends any, modx extends Modx = ['!', 'W']> = {
    '!': {
        'R': {readonly [P in K]: A}
        'W': {         [P in K]: A}
    },
    '?': {
        'R': {readonly [P in K]?: A}
        'W': {         [P in K]?: A}
    }
}[modx[0]][modx[1]]
