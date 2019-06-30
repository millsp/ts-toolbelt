import {Format, FormatMap} from './_Internal'
import {Boolean} from './Boolean'

export type Fmt<B extends Boolean, fmt extends Format> =
    FormatMap[fmt][B]
