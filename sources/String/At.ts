import {Split} from './Split'

import {At as AAt} from '../Any/At'

export type At<S extends string, K extends number> =
    AAt<Split<S, ''>, K>
