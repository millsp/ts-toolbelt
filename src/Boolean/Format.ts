import {Boolean} from './Boolean'
import {Formats} from './_Internal'

export type Format<B extends Boolean, fmt extends Formats> = {
    's': ['false', 'true'][B] // 0: 'false', 1: 'true'
    'b': [ false,   true ][B] // 0:  false , 1:  true
    'n': B
}[fmt]
