import {Format, FormatMap} from './_Internal'

export type Fmt<B extends 0 | 1, fmt extends Format> =
    FormatMap[fmt][B]
